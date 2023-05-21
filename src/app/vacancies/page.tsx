'use client';
import { superJobApi } from '@/store/api/api';
import { Container } from '@mantine/core';
import { Search } from '@/components/search/search';
import { Filters } from '@/components/filters/filters';
import { AuthorizeData } from '@/utils/constants';
import { VacancyCard } from '@/components/vacancyCard/vacancyCard';
import { PaginationWrapper } from '@/components/pagination/Pagination';
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux';
import { setRefreshToken, setToken } from '@/store/reducers/tokenReducer';
import { useEffect } from 'react';
import { setPages, setVacancies } from '@/store/reducers/vacanciesReducer';
import { useLoading } from '@/utils/hooks/useLoading';
import { EmptyPage } from '@/components/emptyPage/emptyPage';
import { useVacanciesStyles } from '@/app/vacancies/styles';

export default function Vacancies() {
  const { classes } = useVacanciesStyles();

  const { token } = useAppSelector((state) => state.tokenReducer);

  const { vacancies } = useAppSelector((state) => state.vacanciesReducer);

  const dispatch = useAppDispatch();

  const [authTrigger, { data: authResponse, isError: isAuthError }] =
    superJobApi.useLazyAuthorizationQuery();

  const [
    vacanciesTrigger,
    { data: VacancyResponse, isError: isVacanciesError, isLoading, isSuccess, isFetching },
  ] = superJobApi.useLazyGetVacanciesQuery();

  useLoading(isLoading, isSuccess, isVacanciesError, isFetching);

  useEffect(() => {
    if (!token && !isAuthError) {
      authTrigger(AuthorizeData);
      dispatch(setToken(authResponse?.access_token));
      dispatch(setRefreshToken(authResponse?.refresh_token));
    }
    if (!vacancies && !isVacanciesError) {
      vacanciesTrigger();
      dispatch(setVacancies(VacancyResponse?.objects));
      dispatch(setPages(VacancyResponse?.total ? Math.ceil(VacancyResponse?.total / 4) : 1));
    }
  });

  return (
    <>
      {isVacanciesError || VacancyResponse?.objects.length === 0 ? (
        <EmptyPage />
      ) : (
        <Container className={classes.vacanciesWrapper}>
          <Filters />
          <Container className={classes.vacanciesSearch}>
            <Search />
            <Container className={classes.vacanciesList}>
              {vacancies && vacancies.map((el) => <VacancyCard key={el.id} vacancy={el} />)}
              <PaginationWrapper />
            </Container>
          </Container>
        </Container>
      )}
    </>
  );
}