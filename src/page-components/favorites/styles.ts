import { createStyles } from '@mantine/core';

export const useFavoritesStyles = createStyles(() => ({
  favoritesWrapper: {
    width: '100%',
    maxWidth: 773,
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    rowGap: 16,
    alignItems: 'center',
  },
  favoritesList: {
    padding: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    rowGap: 16,
  },
}));
