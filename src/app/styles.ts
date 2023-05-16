import { createStyles, px } from '@mantine/core';

export const useMainStyles = createStyles((theme) => ({
  mainBg: {
    minWidth: '100vw',
    minHeight: 'calc(100vh - 86px)',
    paddingTop: '40px',
    background: theme.colors.gray[1],
  },
  main: { display: 'flex', flexDirection: 'row', columnGap: px(20) },

  vacanciesSearch: {
    maxWidth: px(773),
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  vacanciesList: {
    display: 'flex',
    flexDirection: 'column',
  },
}));
