import CharacterCard from './CharacterCard';
export default function CharacterGrid({
  characters,
  favorites,
  toggleFavorite,
  onSelect,
  viewMode
}) {
  return <div className={'character-grid' + (viewMode === 'list' ? ' list-view' : '')}>{characters.map(character => <CharacterCard key={character.id} character={character} favorite={favorites.includes(character.id)} toggleFavorite={toggleFavorite} onSelect={onSelect} />)}</div>;
}
