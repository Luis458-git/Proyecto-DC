import CharacterGrid from '../Components/CharacterGrid';
export function NoResults({
  onClear,
  favoritesEmpty = false
}) {
  return <div className="state-box" role="status"><span className="state-symbol" aria-hidden="true">◇</span><h3>{favoritesEmpty ? 'No classified metahumans saved yet.' : 'No metahumans found in this continuum.'}</h3><p>{favoritesEmpty ? 'Save a character with the heart to build your personal archive.' : 'Try another name or expand your search across the archives.'}</p><button onClick={onClear}>{favoritesEmpty ? 'EXPLORE CHARACTERS' : 'CLEAR FILTERS'}</button></div>;
}
export default function Home({
  onClear,
  ...props
}) {
  return props.characters.length ? <CharacterGrid {...props} /> : <NoResults onClear={onClear} />;
}
