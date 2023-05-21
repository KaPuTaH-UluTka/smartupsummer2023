import React from 'react';
import { Pagination } from '@mantine/core';
import { useAppSelector } from '@/utils/hooks/redux';
import { useVacancies } from '@/utils/hooks/useVacancies';

export const PaginationWrapper = () => {
  const { totalPages } = useAppSelector((state) => state.vacanciesReducer);

  const { globalLoading, changePageHandler } = useVacancies();

  return (
    <Pagination
      total={totalPages || 1}
      mt={40}
      disabled={globalLoading}
      onChange={changePageHandler}
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
