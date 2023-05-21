import React from 'react';
import { Pagination } from '@mantine/core';
import { useAppSelector } from '@/utils/hooks/redux';
import { useVacancies } from '@/utils/hooks/useVacancies';
import { useFavorites } from '@/utils/hooks/useFavorites';

export const PaginationWrapper = ({
  isFavorites,
  favoritesPages,
}: {
  isFavorites?: boolean;
  favoritesPages?: number;
}) => {
  const { totalPages } = useAppSelector((state) => state.vacanciesReducer);

  const { isGlobalLoading, changePageHandler } = useVacancies();

  const { changeFavoritesPageHandler } = useFavorites();

  return (
    <Pagination
      total={favoritesPages ? favoritesPages : totalPages || 1}
      mt={40}
      disabled={isGlobalLoading}
      onChange={isFavorites ? changeFavoritesPageHandler : changePageHandler}
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
