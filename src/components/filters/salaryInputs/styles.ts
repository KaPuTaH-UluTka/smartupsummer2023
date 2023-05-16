import { createStyles, px } from '@mantine/core';

export const useInputsStyles = createStyles((theme) => ({
  inputToggles: {
    height: px(26),
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  },

  inputToggleIcon: {
    ':hover': {
      color: theme.colors.blue[4],
    },
  },

  salary: {
    marginTop: px(8),
    color: theme.colors.gray[4],
  },
}));
