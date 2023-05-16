import axios from 'axios';
import { API_URL } from '@/api/url';
import { API_ENDPOINTS } from '@/utils/apiEndpoints';
import { AuthorizationRequest, VacanciesRequest } from '@/utils/types';
import { API_SECRET, AuthorizeData } from '@/utils/constants';

const token = localStorage.getItem('token');

export const authorization = (data: AuthorizationRequest) => {
  return axios
    .get(
      `${API_URL + API_ENDPOINTS.AUTHORIZATION}?login=${data.login}&password=${
        data.password
      }&client_id=${data.client_id}&client_secret=${data.client_secret}&hr=${data.hr}`,
      { headers: { 'x-secret-key': API_SECRET } }
    )
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};

export const getVacancies = (
  page: number,
  keyword?: string,
  paymentFrom?: string,
  paymentTo?: string,
  catalogue?: number,
  itemsPerPage = 4
) => {
  return axios
    .get(
      `${
        API_URL + API_ENDPOINTS.VACANCIES
      }?published=1&keyword=${keyword}&payment_from=${paymentFrom}&payment_to=${paymentTo}&catalogues=${catalogue}&page=${page}&count=${itemsPerPage}`,
      {
        headers: {
          'x-secret-key': API_SECRET,
          'X-Api-App-Id': AuthorizeData.client_secret,
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};
