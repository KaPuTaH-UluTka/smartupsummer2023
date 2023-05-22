import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux';
import { useFavorites } from '@/utils/hooks/useFavorites';
import { superJobApi } from '@/store/api/api';
import { useLoading } from '@/utils/hooks/useLoading';
import { setFavoriteVacancies } from '@/store/reducers/vacanciesReducer';
import { EmptyPage } from '@/components/emptyPage/emptyPage';
import { Container } from '@mantine/core';
import { VacancyCard } from '@/components/vacancyCard/vacancyCard';
import { PaginationWrapper } from '@/components/pagination/Pagination';
import { useFavoritesStyles } from '@/page-components/favorites/styles';

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
    }
    if (isSuccess && data) {
      dispatch(setFavoriteVacancies(data?.objects));
    }
  });

  return (
    <>
      {favoriteVacancies && (
        <Container className={classes.favoritesWrapper}>
          <Container className={classes.favoritesList}>
            {favoriteVacancies.map((el) => (
              <VacancyCard key={el.id} vacancy={el} />
            ))}
          </Container>
          <PaginationWrapper isFavorites={true} favoritesPages={favoritePages} />
        </Container>
      )}
      {(isError || parsedFavorites.length === 0) && <EmptyPage />}
    </>
  );
};

export default Favorites;
