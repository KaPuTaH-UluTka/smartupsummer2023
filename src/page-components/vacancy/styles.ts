import { createStyles, px, rem } from '@mantine/core';

export const useVacancyStyles = createStyles((theme) => ({
  vacancyWrapper: {
    display: 'flex',
    width: '100%',
    maxWidth: 773,
    padding: 0,
    flexDirection: 'column',
  },
  vacancyInfo: {
    marginTop: 20,
    backgroundColor: theme.colors.gray[0],
    border: `${rem(1)} solid ${theme.colors.gray[2]}`,
    borderRadius: px(12),
    padding: px(24),
  },
}));
