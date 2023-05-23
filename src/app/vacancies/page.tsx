'use client';
import { superJobApi } from '@/store/api/api';
import { AuthorizeData } from '@/utils/constants';
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux';
import { setRefreshToken, setToken } from '@/store/reducers/tokenReducer';
import { useEffect } from 'react';
import Vacancies from '@/page-components/vacancies/vacancies';

export default function VacanciesWrapper() {
  const { token } = useAppSelector((state) => state.tokenReducer);

  const dispatch = useAppDispatch();

  const [authTrigger, { data: authResponse, isError, isSuccess }] =
    superJobApi.useLazyAuthorizationQuery();

  useEffect(() => {
    if (!token && !isError) {
      authTrigger(AuthorizeData);
    }
    if (isSuccess) {
      dispatch(setToken(authResponse?.access_token));
      dispatch(setRefreshToken(authResponse?.refresh_token));
    }
  }, [
    authResponse?.access_token,
    authResponse?.refresh_token,
    authTrigger,
    dispatch,
    isError,
    isSuccess,
    token,
  ]);

  return <Vacancies />;
}
