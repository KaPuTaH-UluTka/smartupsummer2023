import { useAppDispatch } from '@/utils/hooks/redux';
import { useEffect } from 'react';
import { setLoadingFalse, setLoadingTrue } from '@/store/reducers/loadingReducer';

export const useLoading = (
  isLoading: boolean,
  isSuccess: boolean,
  isError: boolean,
  isFetching: boolean
) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoading) {
      dispatch(setLoadingTrue());
    }
    if ((!isFetching && isSuccess) || (!isFetching && isError)) {
      dispatch(setLoadingFalse());
    }
  }, [dispatch, isError, isFetching, isLoading, isSuccess]);
};
