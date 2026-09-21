import { useEffect, useRef } from 'react';
export default function SearchBar({
  search,
  onSearch
}) {
  const input = useRef(null);
  useEffect(() => {
    const focusSearch = e => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k' && !document.querySelector('dialog[open]')) {
        e.preventDefault();
        input.current?.focus();
      }
    };
    window.addEventListener('keydown', focusSearch);
    return () => window.removeEventListener('keydown', focusSearch);
  }, []);
  return <div className="search-bar"><span className="search-icon" aria-hidden="true">⌕</span><label className="sr-only" htmlFor="character-search">Search character by name</label><input ref={input} id="character-search" type="search" placeholder="Search character..." value={search} onChange={e => onSearch(e.target.value)} /><kbd>Ctrl / ⌘ K</kbd><button onClick={() => {
      onSearch('');
      input.current.focus();
    }}>CLEAR</button></div>;
}
