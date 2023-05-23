import { createStyles, rem } from '@mantine/core';

export const HEADER_HEIGHT = rem(60);

export const headerStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
    borderBottom: 'none',
    height: '84px',
    maxHeight: 'unset',
    marginBottom: '0 !Important',
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    height: '84px',
    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'space-between',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
    marginLeft: '18rem',
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    textTransform: 'capitalize',
    color: theme.colors.gray[6],
    fontSize: theme.fontSizes.lg,
    fontWeight: 500,
    transition: '0.3s',

    '&:hover': {
      transition: '0.3s',
      backgroundColor: theme.colors.gray[2],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      color: theme.colors.blue[4],
    },
  },
}));
