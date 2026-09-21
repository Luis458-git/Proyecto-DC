export default function Footer({
  loading,
  error,
  count
}) {
  return <footer className="footer"><div className="container footer-inner"><div><strong>DC MULTIVERSE EXPLORER</strong><p>Powered by <a href="https://akabab.github.io/superhero-api/" target="_blank" rel="noreferrer">SuperHero API · Akabab</a></p></div><p>WayneTech Archives &amp; Telemetry Project<br />An independent fan-made multiverse repository.</p><span className={'connection-status' + (loading || error ? ' offline' : '')}>{loading ? 'Synchronizing archives' : error ? 'Archive connection unavailable' : count + ' records synchronized // Online'}</span></div></footer>;
}
