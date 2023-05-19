'use client';
import { superJobApi } from '@/store/api/api';
import { Container } from '@mantine/core';
import { Search } from '@/components/search/search';
import { Filters } from '@/components/filters/filters';
import { useMainStyles } from '@/app/styles';
import { AuthorizeData } from '@/utils/constants';
import { VacancyCard } from '@/components/vacancyCard/vacancyCard';
import { PaginationWrapper } from '@/components/pagination/Pagination';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { setRefreshToken, setToken } from '@/store/reducers/tokenReducer';
import { useEffect } from 'react';
import { setPages, setVacancies } from '@/store/reducers/vacanciesReducer';
import { LoaderWrapper } from '@/components/loader/loader';

export default function Page() {
  const { classes } = useMainStyles();

  const { token } = useAppSelector((state) => state.tokenReducer);

  const { vacancies } = useAppSelector((state) => state.vacanciesReducer);

  const { globalLoading } = useAppSelector((state) => state.loadingReducer);

  const dispatch = useAppDispatch();

  const [authTrigger, { data: authResponse, isError: isAuthError }] =
    superJobApi.useLazyAuthorizationQuery();

  const [vacanciesTrigger, { data: vacanciesResponse, isError: isVacanciesError }] =
    superJobApi.useLazyGetVacanciesQuery();

  useEffect(() => {
    if (!token && !isAuthError) {
      authTrigger(AuthorizeData);
      dispatch(setToken(authResponse?.access_token));
      dispatch(setRefreshToken(authResponse?.refresh_token));
    }
    if (!vacancies && !isVacanciesError) {
      vacanciesTrigger();
      dispatch(setVacancies(vacanciesResponse?.objects));
      dispatch(setPages(vacanciesResponse?.total ? Math.ceil(vacanciesResponse?.total / 4) : 1));
    }
  });

  return (
    <>
      <Filters />
      <Container className={classes.vacanciesSearch}>
        <Search />
        <Container className={classes.vacanciesList}>
          {vacancies && vacancies.map((el) => <VacancyCard key={el.id} vacancy={el} />)}
          <PaginationWrapper />
        </Container>
      </Container>
      <LoaderWrapper opened={globalLoading} />
    </>
  );
}