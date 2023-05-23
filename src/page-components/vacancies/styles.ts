import { createStyles, em, getBreakpointValue } from '@mantine/core';

export const useVacanciesStyles = createStyles((theme) => ({
  vacanciesWrapper: {
    display: 'flex',
    padding: 0,
    width: '100%',
    maxWidth: 1140,
    flexDirection: 'row',
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.md) - 1)})`]: {
      flexDirection: 'column',
      justifyContent: 'center',
      rowGap: 16,
    },
  },
  vacanciesSearch: {
    maxWidth: 773,
    width: '100%',
    display: 'flex',
    padding: 0,
    flexDirection: 'column',
    marginLeft: 28,
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.md) - 1)})`]: {
      marginLeft: 0,
      maxWidth: '100%',
    },
  },

  vacanciesList: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    rowGap: 16,
    marginTop: 16,
    alignItems: 'center',
  },
}));
