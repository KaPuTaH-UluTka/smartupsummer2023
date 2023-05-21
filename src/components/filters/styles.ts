import { createStyles, em, getBreakpointValue, rem } from '@mantine/core';

export const useFiltersStyles = createStyles((theme, { opened }: { opened: boolean }) => ({
  filtersWrapper: {
    width: 315,
    height: 360,
    padding: 20,
    backgroundColor: theme.colors.gray[0],
    border: `${rem(1)} solid ${theme.colors.gray[2]}`,
    borderRadius: 12,
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.md) - 1)})`]: {
      width: '100%',
      height: 'unset',
    },
  },

  filtersForm: {},

  filtersTitle: {
    fontSize: 20,
  },

  resetFiltersWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 20,
    padding: 0,
    marginBottom: 32,
  },

  filtersSubTitle: {
    marginTop: 20,
    fontSize: 16,
  },

  resetFiltersBtn: {
    width: 115,
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 400,
    fontSize: 14,
    color: theme.colors.gray[4],
    padding: 0,
  },

  resetFiltersBtnIcon: {
    marginTop: 6,
  },

  industry: {
    marginTop: 8,
    width: '100%',
    height: 42,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,
    border: `${rem(1)} solid ${theme.colors.gray[3]}`,
    transition: 'background-color 150ms ease',
    backgroundColor: opened ? theme.colors.gray[0] : theme.white,
    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  industryLabel: {
    fontWeight: 400,
    fontSize: theme.fontSizes.sm,
  },
  industryLabelEmpty: {
    color: theme.colors.gray[4],
  },

  industryIcon: {
    color: theme.colors.gray[4],
    transition: 'transform 150ms ease',
    transform: opened ? 'rotate(180deg)' : 'rotate(0deg)',
  },
}));
