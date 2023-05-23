import { API_URL } from '@/store/api/url';
import { API_ENDPOINTS } from '@/utils/apiEndpoints';
import {
  AuthorizationRequest,
  AuthorizationResponse,
  CataloguesResponse,
  VacanciesRequest,
  VacancyResponse,
} from '@/utils/types';
import { API_SECRET, AuthorizeData } from '@/utils/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '@/store/store';

export const superJobApi = createApi({
  reducerPath: 'superJobApi',
  keepUnusedDataFor: 0,
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
      const { token } = (getState() as RootState).tokenReducer;
      headers.set('x-secret-key', API_SECRET);
      headers.set('X-Api-App-Id', AuthorizeData.client_secret);
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    authorization: builder.query<AuthorizationResponse, AuthorizationRequest>({
      query: (data) => ({
        url: `${API_ENDPOINTS.AUTHORIZATION}?login=${data.login}&password=${data.password}&client_id=${data.client_id}&client_secret=${data.client_secret}&hr=${data.hr}`,
      }),
    }),
    getCatalogues: builder.query<CataloguesResponse[], void>({
      query: () => ({
        url: API_ENDPOINTS.CATALOGUES,
      }),
    }),
    getVacancies: builder.query<
      { objects: VacancyResponse[]; total: number },
      VacanciesRequest | void
    >({
      query: (data, itemsPerPage = 4) => ({
        url: `${API_ENDPOINTS.VACANCIES}?published=1${
          data?.keyword ? `&keyword=${data?.keyword}` : ''
        }${data?.paymentFrom ? `&payment_from=${data?.paymentFrom}` : ''}${
          data?.paymentTo ? `&payment_to=${data?.paymentTo}` : ''
        }${data?.catalogue ? `&catalogues=${data?.catalogue}` : ''}&page=${
          data?.page || 0
        }&count=${itemsPerPage}&no_agreement=${data?.paymentFrom || data?.paymentTo ? '1' : '0'}`,
      }),
    }),
    getOneVacancy: builder.query<VacancyResponse, string>({
      query: (id) => ({
        url: API_ENDPOINTS.VACANCIES + id,
      }),
    }),
    getFavoriteVacancies: builder.query<{ objects: VacancyResponse[]; total: number }, number[]>({
      query: (data) => ({
        url:
          API_ENDPOINTS.VACANCIES +
          '?published=1' +
          data.map((el, i) => `&ids[${i}]=${el}`).join(''),
      }),
    }),
    refreshToken: builder.query<
      AuthorizationResponse,
      { user: AuthorizationRequest; refresh: string }
    >({
      query: (data) => ({
        url: `${API_ENDPOINTS.REFRESH_TOKEN}?refresh_token=${data.refresh}&client_id=${data.user.client_id}&client_secret=${data.user.client_secret} `,
      }),
    }),
  }),
});
