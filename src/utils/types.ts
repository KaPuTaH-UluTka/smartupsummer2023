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
  page: number;
  keyword?: string;
  paymentFrom?: string;
  paymentTo?: string;
  catalogue?: number;
}
