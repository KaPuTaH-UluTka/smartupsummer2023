import { useEffect } from 'react';
import { setPages, setVacancies } from '@/store/reducers/vacanciesReducer';
import { superJobApi } from '@/store/api/api';
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux';
import { useLoading } from '@/utils/hooks/useLoading';

export const useVacancies = () => {
  const dispatch = useAppDispatch();
  const [vacanciesTrigger, { data: VacancyResponse, isFetching, isSuccess, isLoading, isError }] =
    superJobApi.useLazyGetVacanciesQuery();

  const { isGlobalLoading } = useAppSelector((state) => state.loadingReducer);

  const { currentCatalog, paymentFrom, paymentTo, keyword } = useAppSelector(
    (state) => state.filtersReducer
  );

  const submitHandler = () => {
    vacanciesTrigger({
      catalogue: currentCatalog?.key,
      paymentFrom: paymentFrom,
      paymentTo: paymentTo,
      keyword: keyword,
    });
  };

  const changePageHandler = (page: number) => {
    vacanciesTrigger({
      catalogue: currentCatalog?.key,
      paymentFrom: paymentFrom,
      paymentTo: paymentTo,
      keyword: keyword,
      page: page - 1,
    });
  };

  useLoading(isLoading, isSuccess, isError, isFetching);

  useEffect(() => {
    if (!isFetching && isSuccess) {
      dispatch(setVacancies(VacancyResponse?.objects));
      dispatch(setPages(VacancyResponse?.total ? Math.ceil(VacancyResponse?.total / 4) : 1));
    }
  }, [
    dispatch,
    isFetching,
    isLoading,
    isSuccess,
    VacancyResponse?.objects,
    VacancyResponse?.total,
  ]);

  return { isGlobalLoading, changePageHandler, submitHandler };
};
