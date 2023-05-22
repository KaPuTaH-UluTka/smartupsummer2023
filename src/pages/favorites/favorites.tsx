import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux';
import { useFavoritesStyles } from '@/pages/favorites/styles';
import { useFavorites } from '@/utils/hooks/useFavorites';
import { superJobApi } from '@/store/api/api';
import { useLoading } from '@/utils/hooks/useLoading';
import { setFavoriteVacancies } from '@/store/reducers/vacanciesReducer';
import { EmptyPage } from '@/components/emptyPage/emptyPage';
import { Container } from '@mantine/core';
import { VacancyCard } from '@/components/vacancyCard/vacancyCard';
import { PaginationWrapper } from '@/components/pagination/Pagination';

const Favorites = () => {
  const dispatch = useAppDispatch();
  const { classes } = useFavoritesStyles();

  const { favoritePages, parsedFavorites } = useFavorites();

  const { favoriteVacancies } = useAppSelector((state) => state.vacanciesReducer);

  const [trigger, { data, isLoading, isSuccess, isError, isFetching }] =
    superJobApi.useLazyGetFavoriteVacanciesQuery();

  useLoading(isLoading, isSuccess, isError, isFetching);

  useEffect(() => {
    if (!favoriteVacancies && !isError && !isLoading && parsedFavorites) {
      trigger(parsedFavorites.splice(0, 4));
      dispatch(setFavoriteVacancies(data?.objects));
    }
  });
  return (
    <>
      {isError || parsedFavorites.length === 0 ? (
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
};

export default Favorites;
