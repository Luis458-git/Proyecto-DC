// Public, token-free SuperHero API: https://akabab.github.io/superhero-api/api/
export async function getCharacters(signal) {
  const response = await fetch('https://akabab.github.io/superhero-api/api/all.json', {
    signal
  });
  if (!response.ok) throw new Error('The archive returned HTTP ' + response.status + '.');
  const data = await response.json();
  if (!Array.isArray(data)) throw new Error('The archive returned an unexpected response.');
  const characters = data.filter(c => c?.biography?.publisher === 'DC Comics' && Number.isInteger(c.id) && typeof c.name === 'string' && c.name.trim());
  if (!characters.length) throw new Error('The archive did not return any DC Comics records.');
  return characters;
}
export function displayValue(value) {
  return value && value !== '-' && value !== 'null' ? value : 'Unknown';
}
export function statValue(value) {
  return value === null || value === undefined || value === '' || !Number.isFinite(Number(value)) ? null : Math.max(0, Math.min(100, Number(value)));
}
export function selectCharacters(characters, {
  search,
  alignmentFilter,
  genderFilter,
  sortOrder,
  page
}, favorites) {
  const query = search.trim().toLowerCase().replace(/^the\s+/, '');
  return characters.filter(c => {
    const names = [c.name, c.biography.fullName, ...(Array.isArray(c.biography.aliases) ? c.biography.aliases : [])];
    const matchesName = !query || names.some(name => typeof name === 'string' && name.toLowerCase().includes(query));
    return (page !== 'favorites' || favorites.includes(c.id)) && matchesName && (alignmentFilter === 'all' || c.biography.alignment === alignmentFilter) && (genderFilter === 'all' || c.appearance?.gender === genderFilter);
  }).sort((a, b) => {
    if (sortOrder === 'name-asc') return a.name.localeCompare(b.name);
    if (sortOrder === 'name-desc') return b.name.localeCompare(a.name);
    return (statValue(b.powerstats?.[sortOrder]) ?? -1) - (statValue(a.powerstats?.[sortOrder]) ?? -1) || a.name.localeCompare(b.name);
  });
}
