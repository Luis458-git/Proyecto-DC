export default function Filters({
  alignment,
  gender,
  sort,
  view,
  counts,
  onChange,
  onView
}) {
  return <section className="filters" aria-label="Character filters"><div className="filter-chips">
 <button aria-pressed={alignment === 'all' && gender === 'all'} onClick={() => onChange({
        alignmentFilter: 'all',
        genderFilter: 'all'
      })}>All Continua</button>
 {['good', 'bad'].map(value => <button key={value} className={value === 'bad' ? 'villain-filter' : ''} aria-pressed={alignment === value} onClick={() => onChange({
        alignmentFilter: alignment === value ? 'all' : value
      })}>{value === 'good' ? 'Heroes' : 'Villains'} ({counts[value]})</button>)}
 {['Male', 'Female'].map(value => <button key={value} aria-pressed={gender === value} onClick={() => onChange({
        genderFilter: gender === value ? 'all' : value
      })}>{value}</button>)}</div>
 <div className="view-controls"><label htmlFor="sort-order">Order:</label><select id="sort-order" value={sort} onChange={e => onChange({
        sortOrder: e.target.value
      })}>{[['power', 'Power Rating'], ['name-asc', 'Name A–Z'], ['name-desc', 'Name Z–A'], ['intelligence', 'Intelligence'], ['strength', 'Strength'], ['speed', 'Speed'], ['durability', 'Durability'], ['combat', 'Combat']].map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select><button aria-label="Grid view" aria-pressed={view === 'grid'} onClick={() => onView('grid')}>▦</button><button aria-label="List view" aria-pressed={view === 'list'} onClick={() => onView('list')}>☰</button></div></section>;
}
