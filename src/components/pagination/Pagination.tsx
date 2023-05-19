import React, { useEffect } from 'react';
import { Pagination } from '@mantine/core';
import { superJobApi } from '@/store/api/api';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { setVacancies } from '@/store/reducers/vacanciesReducer';
import { setLoadingFalse, setLoadingTrue } from '@/store/reducers/loadingReducer';

export const PaginationWrapper = () => {
  const dispatch = useAppDispatch();
  const { totalPages } = useAppSelector((state) => state.vacanciesReducer);

  const [vacanciesTrigger, { data: vacanciesResponse, isFetching, isSuccess, isLoading }] =
    superJobApi.useLazyGetVacanciesQuery();

  const { globalLoading } = useAppSelector((state) => state.loadingReducer);

  const { currentCatalog, paymentFrom, paymentTo, keyword } = useAppSelector(
    (state) => state.filtersReducer
  );

  const changePageHandler = (page: number) => {
    vacanciesTrigger({
      catalogue: currentCatalog?.key,
      paymentFrom: paymentFrom,
      paymentTo: paymentTo,
      keyword: keyword,
      page: page,
    });
  };

  useEffect(() => {
    if (isLoading) {
      dispatch(setLoadingTrue());
    }
    if (!isFetching && isSuccess) {
      dispatch(setVacancies(vacanciesResponse?.objects));
      dispatch(setLoadingFalse());
    }
  }, [dispatch, isFetching, isLoading, isSuccess, vacanciesResponse?.objects]);

  return (
    <Pagination
      total={totalPages || 1}
      mt={104}
      disabled={globalLoading}
      onChange={changePageHandler}
      styles={(theme) => ({
        control: {
          '&[data-active]': {
            transition: '0.3s',
            backgroundColor: theme.colors.blue[4],
          },
          '&[data-active]:hover': {
            transition: '0.3s',
            backgroundColor: theme.colors.blue[3],
          },
        },
      })}
    />
  );
};
