import { statValue } from '../services/superheroApi';
export default function PowerStats({
  stats = {}
}) {
  return <section aria-label="Power statistics" className="power-stats">{['intelligence', 'strength', 'speed', 'durability', 'power', 'combat'].map(name => {
      const value = statValue(stats[name]);
      return <div key={name}><div className="power-label"><span>{name}</span><span>{value ?? 'Unknown'}</span></div><progress max="100" value={value ?? 0} aria-label={name + ': ' + (value ?? 'unknown')} /></div>;
    })}</section>;
}
