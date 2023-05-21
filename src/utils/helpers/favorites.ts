export const favoritesUpdater = (id: number) => {
  const favorites = localStorage.getItem('favorites');
  if (favorites) {
    const currentFavorites = JSON.parse(favorites);
    if (currentFavorites.find((el: number) => el === id)) {
      const index = currentFavorites.indexOf(id);
      currentFavorites.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(currentFavorites));
    } else {
      currentFavorites.push(id);
      localStorage.setItem('favorites', JSON.stringify(currentFavorites));
    }
  }
  if (!favorites) {
    localStorage.setItem('favorites', JSON.stringify([id]));
  }
};
export const favoritesChecher = (id: number) => {
  const favorites = localStorage.getItem('favorites');
  if (favorites) {
    const currentFavorites = JSON.parse(favorites);
    return !!currentFavorites.find((el: number) => el === id);
  }
};
