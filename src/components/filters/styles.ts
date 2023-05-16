import { createStyles, px, rem } from '@mantine/core';

export const useFiltersStyles = createStyles((theme, { opened }: { opened: boolean }) => ({
  filtersWrapper: {
    width: px(315),
    height: px(360),
    padding: px(20),
    backgroundColor: theme.colors.gray[0],
    border: `${px(1)} solid ${theme.colors.gray[2]}`,
    borderRadius: px(12),
  },

  filtersForm: {},

  filtersTitle: {
    fontSize: px(20),
  },

  resetFiltersWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: px(20),
    padding: 0,
    marginBottom: px(32),
  },

  filtersSubTitle: {
    marginTop: px(20),
    fontSize: px(16),
  },

  resetFiltersBtn: {
    width: px(115),
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 400,
    fontSize: px(14),
    color: theme.colors.gray[4],
    padding: 0,
  },

  resetFiltersBtnIcon: {
    marginTop: px(6),
  },

  industry: {
    marginTop: px(8),
    width: '100%',
    height: px(42),
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

  submitBtn: {
    marginTop: px(20),
    backgroundColor: theme.colors.blue[4],
    width: '100%',
  },
}));
