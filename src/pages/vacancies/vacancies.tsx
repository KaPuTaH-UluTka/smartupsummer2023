import React, { useEffect } from 'react';
import { useVacanciesStyles } from '@/pages/vacancies/styles';
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux';
import { superJobApi } from '@/store/api/api';
import { useLoading } from '@/utils/hooks/useLoading';
import { setPages, setVacancies } from '@/store/reducers/vacanciesReducer';
import { Filters } from '@/components/filters/filters';
import { Container } from '@mantine/core';
import { Search } from '@/components/search/search';
import { VacancyCard } from '@/components/vacancyCard/vacancyCard';
import { PaginationWrapper } from '@/components/pagination/Pagination';
import { EmptyPage } from '@/components/emptyPage/emptyPage';

const Vacancies = () => {
  const { classes } = useVacanciesStyles();

  const { token } = useAppSelector((state) => state.tokenReducer);
  const { vacancies } = useAppSelector((state) => state.vacanciesReducer);

  const dispatch = useAppDispatch();

  const [
    vacanciesTrigger,
    { data: VacancyResponse, isError: isVacanciesError, isLoading, isSuccess, isFetching },
  ] = superJobApi.useLazyGetVacanciesQuery();

  useLoading(isLoading, isSuccess, isVacanciesError, isFetching);

  useEffect(() => {
    if (!vacancies && !isVacanciesError && token) {
      vacanciesTrigger();
      dispatch(setVacancies(VacancyResponse?.objects));
      dispatch(setPages(VacancyResponse?.total ? Math.ceil(VacancyResponse?.total / 4) : 1));
    }
  });

  return (
    <Container className={classes.vacanciesWrapper}>
      <Filters />
      <Container className={classes.vacanciesSearch}>
        <Search />
        {vacancies ? (
          <Container className={classes.vacanciesList}>
            {vacancies.map((el) => (
              <VacancyCard key={el.id} vacancy={el} />
            ))}
            <PaginationWrapper />
          </Container>
        ) : (
          (isVacanciesError || VacancyResponse?.objects.length === 0) && (
            <EmptyPage isFromVacancies={true} />
          )
        )}
      </Container>
    </Container>
  );
};

export default Vacancies;
