import { createStyles, px } from '@mantine/core';

export const useMainStyles = createStyles((theme) => ({
  mainBg: {
    minWidth: '100vw',
    minHeight: 'calc(100vh - 86px)',
    padding: 0,
    paddingTop: '40px',
    background: theme.colors.gray[1],
  },
  main: { display: 'flex', flexDirection: 'row', paddingBottom: 50 },

  vacanciesSearch: {
    maxWidth: px(773),
    width: '100%',
    display: 'flex',
    padding: 0,
    flexDirection: 'column',
    marginLeft: px(28),
  },

  vacanciesList: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    rowGap: px(16),
    marginTop: px(16),
    alignItems: 'center',
  },
}));
