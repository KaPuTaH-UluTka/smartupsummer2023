import { useEffect } from 'react';
import { setLoadingFalse, setLoadingTrue } from '@/store/reducers/loadingReducer';
import { setPages, setVacancies } from '@/store/reducers/vacanciesReducer';
import { superJobApi } from '@/store/api/api';
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux';

export const useVacancies = () => {
  const dispatch = useAppDispatch();
  const [vacanciesTrigger, { data: VacancyResponse, isFetching, isSuccess, isLoading }] =
    superJobApi.useLazyGetVacanciesQuery();

  const { globalLoading } = useAppSelector((state) => state.loadingReducer);

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

  useEffect(() => {
    if (isLoading) {
      dispatch(setLoadingTrue());
    }
    if (!isFetching && isSuccess) {
      dispatch(setVacancies(VacancyResponse?.objects));
      dispatch(setPages(VacancyResponse?.total ? Math.ceil(VacancyResponse?.total / 4) : 1));
      dispatch(setLoadingFalse());
    }
  }, [
    dispatch,
    isFetching,
    isLoading,
    isSuccess,
    VacancyResponse?.objects,
    VacancyResponse?.total,
  ]);

  return { globalLoading, changePageHandler, submitHandler };
};
