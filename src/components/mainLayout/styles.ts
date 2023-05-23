import { createStyles } from '@mantine/core';

export const useMainLayoutStyles = createStyles((theme) => ({
  mainBg: {
    minWidth: '100vw',
    minHeight: 'calc(100vh - 86px)',
    padding: 0,
    paddingTop: '40px',
    background: theme.colors.gray[1],
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    width: '100%',
    paddingBottom: 50,
    maxWidth: 1140,
  },
}));
