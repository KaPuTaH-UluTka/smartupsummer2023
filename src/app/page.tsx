'use client';
import { authorization, getVacancies } from '@/api/api';
import { Container } from '@mantine/core';
import { Search } from '@/components/search/search';
import { Filters } from '@/components/filters/filters';
import { useMainStyles } from '@/app/styles';
import { AuthorizeData } from '@/utils/constants';
import { AuthorizationResponse } from '@/utils/types';

export default function Page() {
  const { classes } = useMainStyles();

  const token = localStorage.getItem('token');

  if (!token) {
    const res = authorization(AuthorizeData);
    res.then((data: AuthorizationResponse) => {
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('refresh', data.refresh_token);
    });
  }

  // const vacancies = getVacancies();

  return (
    <>
      <Filters />
      <Container className={classes.vacanciesSearch}>
        <Search />
        <Container className={classes.vacanciesList} />
      </Container>
    </>
  );
}
