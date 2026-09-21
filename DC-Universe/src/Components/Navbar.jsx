export default function Navbar({
  active,
  count,
  navigate,
  firstCharacter,
  openDossier,
  telemetry,
  toggleTelemetry
}) {
  return <header className="navbar"><div className="container nav-inner">
    <button className="brand" onClick={() => navigate('characters')} aria-label="DC Multiverse home"><span className="shield">DC</span><span className="brand-copy">MULTIVERSE<small>WAYNETECH ARCHIVES</small></span></button>
    <nav className="nav-links" aria-label="Main navigation">{[['characters', 'Characters'], ['good', 'Heroes'], ['bad', 'Villains'], ['favorites', 'Favorites (' + count + ')']].map(([id, label]) => <button key={id} aria-current={active === id ? 'page' : undefined} onClick={() => navigate(id)}>{label}</button>)}</nav>
    <div className="nav-tools"><button aria-label="Toggle telemetry preview" aria-pressed={telemetry} onClick={toggleTelemetry}>◉</button><button className="dossier-shortcut" disabled={!firstCharacter} onClick={() => openDossier(firstCharacter)}>Dossier #{String(firstCharacter?.id ?? '—').padStart(3, '0')}</button><span className="avatar" role="img" aria-label="WayneTech archivist visor">WT</span></div>
  </div></header>;
}
