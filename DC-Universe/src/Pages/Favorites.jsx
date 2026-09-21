import Home, { NoResults } from './Home';
export default function Favorites({
  favorites,
  onExplore,
  ...props
}) {
  return favorites.length ? <Home {...props} favorites={favorites} /> : <NoResults favoritesEmpty onClear={onExplore} />;
}
