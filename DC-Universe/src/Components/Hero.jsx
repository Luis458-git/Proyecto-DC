import SearchBar from './SearchBar';
export default function Hero({
  count,
  loading,
  search,
  onSearch,
  quickSearch
}) {
  return <section className="hero" aria-labelledby="hero-title"><div className="eyebrow">Multiverse repository // {loading ? 'Synchronizing archives' : count + ' classified metahumans'}</div><h1 id="hero-title">Explore the <span>DC Multiverse</span></h1><p className="hero-description">Beyond the mask. Beyond the ordinary.<br />Access the WayneTech archives and discover the legends across every continuum.</p><SearchBar search={search} onSearch={onSearch} /><div className="trending"><span>TRENDING FILES</span>{['Batman', 'Superman', 'Wonder Woman', 'The Flash', 'The Joker'].map(name => <button key={name} onClick={() => quickSearch(name)}>{name}</button>)}</div></section>;
}
