import { useEffect, useRef, useState } from 'react';
import PowerStats from './PowerStats';
import { displayValue } from '../services/superheroApi';
export default function CharacterModal({
  character: c,
  favorite,
  toggleFavorite,
  onClose
}) {
  const dialog = useRef(null);
  const [imageFailed, setImageFailed] = useState(false);
  useEffect(() => {
    const element = dialog.current;
    const previous = document.activeElement;
    const overflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      element.close();
      document.body.style.overflow = overflow;
      if (previous?.isConnected) previous.focus();
    };
  }, []);
  const fields = [['Identity', c.biography.fullName], ['Publisher', c.biography.publisher], ['Alignment', c.biography.alignment], ['Gender', c.appearance?.gender], ['Race', c.appearance?.race], ['Place of birth', c.biography.placeOfBirth], ['First appearance', c.biography.firstAppearance], ['Occupation', c.work?.occupation], ['Base', c.work?.base], ['Affiliations', c.connections?.groupAffiliation], ['Family', c.connections?.relatives]];
  return <dialog ref={dialog} className="character-modal" aria-labelledby="dossier-title" onCancel={e => {
    e.preventDefault();
    onClose();
  }} onClick={e => {
    if (e.target === e.currentTarget) {
      const r = e.currentTarget.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) onClose();
    }
  }}>
 <button className="modal-close" aria-label="Close dossier" onClick={onClose}>×</button><div className="modal-layout">{!imageFailed && (c.images?.lg || c.images?.md) ? <img className="modal-image" src={c.images.lg || c.images.md} alt={c.name} onError={() => setImageFailed(true)} /> : <div className="modal-image portrait-fallback" role="img" aria-label={c.name + ' portrait unavailable'}>{c.name.slice(0, 2).toUpperCase()}</div>}<div className="modal-content"><span className="eyebrow">WayneTech // Dossier #{String(c.id).padStart(3, '0')}</span><h2 id="dossier-title">{c.name}</h2><p className="muted">{displayValue(c.biography.fullName)}</p><button aria-pressed={favorite} onClick={() => toggleFavorite(c.id)}>{favorite ? '♥ Saved to favorites' : '♡ Save to favorites'}</button><PowerStats stats={c.powerstats} /><dl>{fields.map(([label, value], i) => <div key={label} className={i > 7 ? 'wide' : ''}><dt>{label}</dt><dd>{displayValue(value)}</dd></div>)}</dl></div></div></dialog>;
}
