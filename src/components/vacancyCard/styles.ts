import { createStyles, rem } from '@mantine/core';

export const useVacancyCardStyles = createStyles((theme) => ({
  cardWrapper: {
    width: '100%',
    backgroundColor: theme.colors.gray[0],
    border: `${rem(1)} solid ${theme.colors.gray[2]}`,
    borderRadius: 12,
    padding: 24,
    cursor: 'pointer',
    maxWidth: 1140,
  },
  cardTitleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 0,
  },
  favoriteToggle: {
    width: 24,
    color: theme.colors.gray[4],
    transition: '0.3s',
    cursor: 'pointer',
  },
  favoriteToggleActive: {
    width: 24,
    color: theme.colors.blue[4],
    transition: '0.3s',
    cursor: 'pointer',
  },
  cardTitle: {
    fontSize: 20,
    color: theme.colors.blue[4],
    fontWeight: 500,
  },
  cardSalaryWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    marginTop: 16,
  },
  cardSalary: { fontWeight: 600, fontSize: 16 },
  separatorIcon: {
    width: 12,
    marginLeft: 12,
    marginRight: 12,
    color: theme.colors.gray[5],
  },
  typeOfWork: {
    fontSize: 16,
    fontWeight: 400,
  },
  locationWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    marginTop: 16,
  },
  locationIcon: { width: 20, color: theme.colors.gray[4] },
  location: { marginLeft: 8, fontSize: 16, fontWeight: 400 },
}));
