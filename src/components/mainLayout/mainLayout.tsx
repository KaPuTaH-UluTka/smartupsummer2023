import { useAppSelector } from '@/utils/hooks/redux';

import { LoaderWrapper } from '@/components/loader/loader';
import { useMainLayoutStyles } from '@/components/mainLayout/styles';
import { Container } from '@mantine/core';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { classes } = useMainLayoutStyles();
  const { isGlobalLoading } = useAppSelector((state) => state.loadingReducer);

  return (
    <Container className={classes.mainBg}>
      <Container className={classes.main}>
        {children}
        <LoaderWrapper opened={isGlobalLoading} />
      </Container>
    </Container>
  );
};
