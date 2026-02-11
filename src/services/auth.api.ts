import { loginBaseUrl } from './api';

type LoginPayload = {
  email: string;
  password: string;
};

export const loginApi = (payload: LoginPayload) =>
  loginBaseUrl.post('Auth/login', payload);
