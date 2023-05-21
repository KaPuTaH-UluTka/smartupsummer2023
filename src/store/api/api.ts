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

const token = localStorage.getItem('token');

export const superJobApi = createApi({
  reducerPath: 'superJobApi',
  keepUnusedDataFor: 0,
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    authorization: builder.query<AuthorizationResponse, AuthorizationRequest>({
      query: (data) => ({
        url: `${API_ENDPOINTS.AUTHORIZATION}?login=${data.login}&password=${data.password}&client_id=${data.client_id}&client_secret=${data.client_secret}&hr=${data.hr}`,
        headers: {
          'x-secret-key': API_SECRET,
          'X-Api-App-Id': AuthorizeData.client_secret,
        },
      }),
    }),
    getCatalogues: builder.query<CataloguesResponse[], void>({
      query: () => ({
        url: API_ENDPOINTS.CATALOGUES,
        headers: {
          'x-secret-key': API_SECRET,
          'X-Api-App-Id': AuthorizeData.client_secret,
          Authorization: `Bearer ${token}`,
        },
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
        headers: {
          'x-secret-key': API_SECRET,
          'X-Api-App-Id': AuthorizeData.client_secret,
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getOneVacancy: builder.query<VacancyResponse, string>({
      query: (id) => ({
        url: API_ENDPOINTS.VACANCIES + id,
        headers: {
          'x-secret-key': API_SECRET,
          'X-Api-App-Id': AuthorizeData.client_secret,
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});
