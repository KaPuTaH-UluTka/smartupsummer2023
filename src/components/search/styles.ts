import { createStyles, px } from '@mantine/core';

export const useSearchStyles = createStyles((theme) => ({
  searchBtn: {
    borderRadius: px(8),
    backgroundColor: theme.colors.blue[4],
    marginRight: px(12),
  },
}));
