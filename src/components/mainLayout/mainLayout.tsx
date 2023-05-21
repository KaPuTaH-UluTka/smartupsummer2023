import { useAppSelector } from '@/utils/hooks/redux';

import { LoaderWrapper } from '@/components/loader/loader';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isGlobalLoading } = useAppSelector((state) => state.loadingReducer);

  return (
    <>
      {children}
      <LoaderWrapper opened={isGlobalLoading} />
    </>
  );
};
