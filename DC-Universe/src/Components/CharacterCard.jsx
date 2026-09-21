import { useState } from 'react';
import { displayValue, statValue } from '../services/superheroApi';
export default function CharacterCard({
  character: c,
  favorite,
  toggleFavorite,
  onSelect
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const alignment = c.biography.alignment;
  const power = statValue(c.powerstats?.power);
  return <article className="character-card"><div className="card-portrait">{!imageFailed && c.images?.md ? <img src={c.images.md} alt={c.name} loading="lazy" onError={() => setImageFailed(true)} /> : <div className="portrait-fallback" role="img" aria-label={c.name + ' portrait unavailable'}>{c.name.slice(0, 2).toUpperCase()}</div>}
 <div className="card-badges"><span className={'badge ' + alignment}>{alignment === 'good' ? 'Hero' : alignment === 'bad' ? 'Villain' : 'Neutral'}</span><span className="badge">{displayValue(c.appearance?.race)}</span></div>
 <button className="favorite-button" aria-label={(favorite ? 'Remove ' : 'Save ') + c.name + (favorite ? ' from favorites' : ' to favorites')} aria-pressed={favorite} onClick={() => toggleFavorite(c.id)}>{favorite ? '♥' : '♡'}</button></div>
 <div className="card-body"><h3>{c.name}</h3><p className="identity">{displayValue(c.biography.fullName)}</p><p className="origin" title={displayValue(c.biography.placeOfBirth)}>{displayValue(c.biography.placeOfBirth)} · {displayValue(c.appearance?.gender)}</p><div className="card-stat"><span>COMBAT <strong>{statValue(c.powerstats?.combat) ?? '—'}</strong></span><span>POWER {power ?? '—'}</span></div><progress max="100" value={power ?? 0} aria-label={c.name + ' power: ' + (power ?? 'unknown')} /><button className="dossier-button" onClick={() => onSelect(c)}>VIEW DOSSIER <span aria-hidden="true">→</span></button></div></article>;
}
