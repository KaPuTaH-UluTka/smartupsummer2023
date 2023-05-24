'use client';
import { superJobApi } from '@/store/api/api';
import { AuthorizeData } from '@/utils/constants';
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux';
import { setRefreshToken, setToken, setTokenExpiredTime } from '@/store/reducers/tokenReducer';
import { useEffect } from 'react';
import Vacancies from '@/page-components/vacancies/vacancies';

export default function VacanciesWrapper() {
  const { token, refreshToken, ttl } = useAppSelector((state) => state.tokenReducer);

  const dispatch = useAppDispatch();

  const [authTrigger, { data: authResponse, isError: isAuthError, isSuccess: isAuthSuccess }] =
    superJobApi.useLazyAuthorizationQuery();

  const [
    refreshTrigger,
    { data: refreshResponse, isError: isRefreshError, isSuccess: isRefreshSuccess },
  ] = superJobApi.useLazyRefreshTokenQuery();

  useEffect(() => {
    if (!token && !isAuthError) {
      authTrigger(AuthorizeData);
    }
    if (token && ttl && !isRefreshError) {
      if (+ttl < Date.now() / 1000 && refreshToken) {
        refreshTrigger({ user: AuthorizeData, refresh: refreshToken });
      }
    }
    if (isAuthSuccess) {
      dispatch(setToken(authResponse?.access_token));
      dispatch(setRefreshToken(authResponse?.refresh_token));
      dispatch(setTokenExpiredTime(authResponse?.ttl));
    }
    if (isRefreshSuccess) {
      dispatch(setToken(refreshResponse?.access_token));
      dispatch(setRefreshToken(refreshResponse?.refresh_token));
      dispatch(setTokenExpiredTime(refreshResponse?.ttl));
    }
  }, [
    authResponse?.access_token,
    authResponse?.refresh_token,
    authResponse?.ttl,
    authTrigger,
    dispatch,
    isAuthError,
    isAuthSuccess,
    isRefreshError,
    isRefreshSuccess,
    refreshResponse?.access_token,
    refreshResponse?.refresh_token,
    refreshResponse?.ttl,
    refreshToken,
    refreshTrigger,
    token,
    ttl,
  ]);

  return <Vacancies />;
}
