import { superJobApi } from '@/store/api/api';
import { useLoading } from '@/utils/hooks/useLoading';
import { setFavoriteVacancies } from '@/store/reducers/vacanciesReducer';
import { useAppDispatch } from '@/utils/hooks/redux';

export const useFavorites = () => {
  const dispatch = useAppDispatch();
  const favorites = localStorage.getItem('favorites');

  const parsedFavorites = favorites && JSON.parse(favorites);

  const [trigger, { data, isLoading, isSuccess, isError, isFetching }] =
    superJobApi.useLazyGetFavoriteVacanciesQuery();

  useLoading(isLoading, isSuccess, isError, isFetching);

  const favoritePages = Math.ceil(parsedFavorites.length / 4);

  const splitFavorites = (parsedFavorites: number[], page: number) => {
    let startIndex = 0;
    if (page > 0) startIndex = (page - 1) * 4;
    return parsedFavorites.splice(startIndex, 4);
  };

  const changeFavoritesPageHandler = (page: number) => {
    trigger(splitFavorites(parsedFavorites, page));
    dispatch(setFavoriteVacancies(data?.objects));
  };

  return { changeFavoritesPageHandler, favoritePages, parsedFavorites };
};
