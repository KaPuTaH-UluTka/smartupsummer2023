'use client';

import { EmptyPage } from '@/components/emptyPage/emptyPage';
import { Container } from '@mantine/core';
import { VacancyCard } from '@/components/vacancyCard/vacancyCard';
import { useFavoritesStyles } from '@/app/favorites/styles';
import { PaginationWrapper } from '@/components/pagination/Pagination';
import { useFavorites } from '@/utils/hooks/useFavorites';
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux';
import { useEffect } from 'react';
import { superJobApi } from '@/store/api/api';
import { setFavoriteVacancies } from '@/store/reducers/vacanciesReducer';
import { useLoading } from '@/utils/hooks/useLoading';

export default function Favorites() {
  const dispatch = useAppDispatch();
  const { classes } = useFavoritesStyles();

  const { favoritePages, parsedFavorites } = useFavorites();

  const { favoriteVacancies } = useAppSelector((state) => state.vacanciesReducer);

  const [trigger, { data, isLoading, isSuccess, isError, isFetching }] =
    superJobApi.useLazyGetFavoriteVacanciesQuery();

  useLoading(isLoading, isSuccess, isError, isFetching);

  useEffect(() => {
    if (!favoriteVacancies && !isError && !isLoading) {
      trigger(parsedFavorites.splice(0, 4));
      dispatch(setFavoriteVacancies(data?.objects));
    }
  });

  return (
    <>
      {isError || data?.objects.length === 0 ? (
        <EmptyPage />
      ) : (
        <Container className={classes.favoritesWrapper}>
          <Container className={classes.favoritesList}>
            {favoriteVacancies &&
              favoriteVacancies.map((el) => <VacancyCard key={el.id} vacancy={el} />)}
          </Container>
          {favoriteVacancies && (
            <PaginationWrapper isFavorites={true} favoritesPages={favoritePages} />
          )}
        </Container>
      )}
    </>
  );
}
