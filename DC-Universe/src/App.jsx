import { useEffect, useMemo, useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Filters from './Components/Filters';
import CharacterModal from './Components/CharacterModal';
import Pagination from './Components/Pagination';
import Loader from './Components/Loader';
import ErrorMessage from './Components/ErrorMessage';
import Footer from './Components/Footer';
import Home, { NoResults } from './Pages/Home';
import Favorites from './Pages/Favorites';
import { getCharacters, selectCharacters } from './services/superheroApi';
import './styles/App.css';
const initialFilters = {
  search: '',
  alignmentFilter: 'all',
  genderFilter: 'all',
  sortOrder: 'power',
  page: 'characters'
};
function readFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem('dc-favorites') || '[]');
    return Array.isArray(saved) ? [...new Set(saved.filter(Number.isInteger))] : [];
  } catch {
    return [];
  }
}
export default function App() {
  const [characters, setCharacters] = useState([]);
  const [filters, setFilters] = useState(initialFilters);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [favorites, setFavorites] = useState(readFavorites);
  const [storageError, setStorageError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [request, setRequest] = useState(0);
  const [telemetry, setTelemetry] = useState(false);
  const [preview, setPreview] = useState('loading');
  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(new DOMException('Archive request timed out. Please try again.', 'TimeoutError')), 20000);
    let active = true;
    getCharacters(controller.signal).then(data => {
      if (active) {
        setCharacters(data);
        setLoading(false);
      }
    }).catch(err => {
      if (active) {
        setError(err.name === 'TimeoutError' ? err.message : 'Unable to retrieve archive data. Check your connection and try again.');
        setLoading(false);
      }
    }).finally(() => clearTimeout(timeout));
    return () => {
      active = false;
      clearTimeout(timeout);
      controller.abort();
    };
  }, [request]);
  const validFavorites = useMemo(() => favorites.filter(id => characters.some(c => c.id === id)), [favorites, characters]);
  const filtered = useMemo(() => selectCharacters(characters, filters, validFavorites), [characters, filters, validFavorites]);
  const page = Math.min(currentPage, Math.max(1, Math.ceil(filtered.length / 8)));
  const changeFilters = patch => {
    setFilters(old => ({
      ...old,
      ...patch
    }));
    setCurrentPage(1);
  };
  const navigate = destination => changeFilters({
    ...initialFilters,
    page: destination === 'favorites' ? 'favorites' : 'characters',
    alignmentFilter: ['good', 'bad'].includes(destination) ? destination : 'all'
  });
  const toggleFavorite = id => {
    const next = favorites.includes(id) ? favorites.filter(value => value !== id) : [...favorites, id];
    setFavorites(next);
    try {
      localStorage.setItem('dc-favorites', JSON.stringify(next));
      setStorageError(false);
    } catch {
      setStorageError(true);
    }
  };
  const retry = () => {
    setLoading(true);
    setError('');
    setRequest(value => value + 1);
  };
  const clear = () => changeFilters({
    search: '',
    alignmentFilter: 'all',
    genderFilter: 'all'
  });
  const gridProps = {
    characters: filtered.slice((page - 1) * 8, page * 8),
    favorites: validFavorites,
    toggleFavorite,
    onSelect: setSelectedCharacter,
    viewMode,
    onClear: clear
  };
  const active = filters.page === 'favorites' ? 'favorites' : filters.alignmentFilter === 'all' ? 'characters' : filters.alignmentFilter;
  return <div className="app"><a className="skip-link" href="#archives">Skip to characters</a><Navbar active={active} count={validFavorites.length} navigate={navigate} firstCharacter={!loading && !error ? characters[0] : null} openDossier={setSelectedCharacter} telemetry={telemetry} toggleTelemetry={() => setTelemetry(value => !value)} />
 <main className="container"><Hero count={characters.length} loading={loading} search={filters.search} onSearch={search => changeFilters({
        search
      })} quickSearch={search => changeFilters({
        ...initialFilters,
        search
      })} />
 <Filters alignment={filters.alignmentFilter} gender={filters.genderFilter} sort={filters.sortOrder} view={viewMode} counts={{
        good: characters.filter(c => c.biography.alignment === 'good').length,
        bad: characters.filter(c => c.biography.alignment === 'bad').length
      }} onChange={changeFilters} onView={setViewMode} />
 <section id="archives" aria-labelledby="archives-title" aria-busy={loading}><div className="section-heading"><h2 id="archives-title">{filters.page === 'favorites' ? 'Your classified collection' : 'The metahuman archives'}</h2><span aria-live="polite">{loading ? 'CONNECTING…' : error ? 'CONNECTION FAILED' : filtered.length + ' RECORDS FOUND'}</span></div>
 {storageError && <p className="storage-note" role="status">Favorites are available for this session, but your browser could not save them.</p>}
 {loading ? <Loader /> : error ? <ErrorMessage message={error} onRetry={retry} /> : <>{filters.page === 'favorites' ? <Favorites {...gridProps} onExplore={() => navigate('characters')} /> : <Home {...gridProps} />}<Pagination total={filtered.length} page={page} onPage={setCurrentPage} /></>}
 </section>
 {telemetry && <details className="sandbox" open><summary>REACT STATE SANDBOX // INTERFACE PREVIEW</summary><div className="sandbox-tabs" role="group" aria-label="Preview interface states">{[['loading', 'LOADING STATE'], ['error', 'ERROR STATE'], ['empty', 'NO RESULTS']].map(([value, label]) => <button key={value} aria-pressed={preview === value} onClick={() => setPreview(value)}>{label}</button>)}</div>{preview === 'loading' ? <Loader /> : preview === 'error' ? <ErrorMessage message="Preview: the quantum relay is temporarily unreachable." onRetry={() => setPreview('loading')} /> : <NoResults onClear={() => setPreview('loading')} />}</details>}
 </main><Footer loading={loading} error={error} count={characters.length} />{selectedCharacter && <CharacterModal key={selectedCharacter.id} character={selectedCharacter} favorite={favorites.includes(selectedCharacter.id)} toggleFavorite={toggleFavorite} onClose={() => setSelectedCharacter(null)} />}</div>;
}
