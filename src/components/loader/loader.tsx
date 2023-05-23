import { Container, createStyles, Loader, px, Transition } from '@mantine/core';

export const useLoaderStyles = createStyles((theme) => ({
  loaderWrapper: {
    position: 'absolute',
    top: px(70),
    width: '100vw',
    zIndex: 10,
    left: 0,
    maxWidth: 'unset',
    display: 'flex',
    justifyContent: 'center',
  },
  loader: {
    stroke: theme.colors.blue[4],
    zIndex: 5,
  },
}));

export const LoaderWrapper = ({ opened }: { opened: boolean }) => {
  const { classes } = useLoaderStyles();

  return (
    <Transition mounted={opened} transition={'slide-down'} duration={400} timingFunction="ease">
      {() => (
        <Container className={classes.loaderWrapper}>
          <Loader className={classes.loader} />
        </Container>
      )}
    </Transition>
  );
};
