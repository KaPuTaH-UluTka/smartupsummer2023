export interface AuthorizationRequest {
  login: string;
  password: string;
  client_id: number;
  client_secret: string;
  hr: number;
}

export interface AuthorizationResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  reg_user_resumes_count: number;
  token_type: string;
  ttl: number;
}

export interface VacanciesRequest {
  page?: number;
  keyword?: string;
  paymentFrom?: number;
  paymentTo?: number;
  catalogue?: number;
}

export interface CataloguesResponse {
  key: number;
  positions: [];
  title: string;
  title_rus: string;
  title_trimmed: string;
  url_rus: string;
}

export interface VacanciesResponse {
  id: number;
  profession: string;
  firm_name: string;
  town: {
    title: string;
  };
  type_of_work: {
    title: string;
  };
  payment_from: number;
  payment_to: number;
  currency: string;
}
