import { createStyles, px, rem } from '@mantine/core';

export const useVacancyCardStyles = createStyles((theme) => ({
  cardWrapper: {
    width: '100%',
    backgroundColor: theme.colors.gray[0],
    border: `${rem(1)} solid ${theme.colors.gray[2]}`,
    borderRadius: px(12),
    padding: px(24),
    cursor: 'pointer',
    maxWidth: px(1140),
  },
  cardTitleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 0,
  },
  favoriteToggle: {
    width: px(24),
    color: theme.colors.gray[4],
    transition: '0.3s',
    cursor: 'pointer',
  },
  favoriteToggleActive: {
    width: px(24),
    color: theme.colors.blue[4],
    transition: '0.3s',
    cursor: 'pointer',
  },
  cardTitle: {
    fontSize: px(20),
    color: theme.colors.blue[4],
    fontWeight: 500,
  },
  cardSalaryWrapper: { display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 0 },
  cardSalary: { fontWeight: 600, fontSize: px(16) },
  separatorIcon: {
    width: px(12),
    marginLeft: px(12),
    marginRight: px(12),
    color: theme.colors.gray[5],
  },
  locationWrapper: { display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 0 },
  locationIcon: { width: px(20), color: theme.colors.gray[4] },
  location: { marginLeft: px(8) },
}));
