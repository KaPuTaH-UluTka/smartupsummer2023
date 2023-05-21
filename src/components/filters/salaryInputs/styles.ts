import { createStyles, em, getBreakpointValue, px } from '@mantine/core';

export const useInputsStyles = createStyles((theme) => ({
  inputsWrapper: {
    padding: 0,
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.md) - 1)})`]: {
      display: 'flex',
      flexDirection: 'row',
      columnGap: 16,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.xs) - 1)})`]: {
      display: 'unset',
      flexDirection: 'unset',
      justifyContent: 'unset',
      alignItems: 'unset',
    },
  },

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

  submitBtn: {
    marginTop: 20,
    backgroundColor: theme.colors.blue[4],
    width: '100%',
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.md) - 1)})`]: {
      maxWidth: 300,
      marginTop: 7,
    },
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.xs) - 1)})`]: {
      maxWidth: 'unset',
      marginTop: 20,
    },
  },
}));
