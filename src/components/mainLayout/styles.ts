import { createStyles } from '@mantine/core';

export const useMainLayoutStyles = createStyles((theme) => ({
  mainBg: {
    minWidth: '100vw',
    minHeight: 'calc(100vh - 86px)',
    padding: 0,
    paddingTop: '40px',
    background: theme.colors.gray[1],
  },
  main: { display: 'flex', flexDirection: 'row', paddingBottom: 50 },
}));
