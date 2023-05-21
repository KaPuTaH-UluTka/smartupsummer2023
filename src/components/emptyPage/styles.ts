import { createStyles } from '@mantine/core';

export const useEmptyPageStyles = createStyles((theme) => ({
  emptyPageWrapper: {
    marginTop: 120,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 32,
  },
  emptyPageTitle: {
    fontSize: 24,
  },
  btn: {
    color: theme.colors.blue[5],
  },
}));
