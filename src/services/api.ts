import axios from 'axios';
import { getToken } from '@services/storage';

export const api = axios.create({
  baseURL: 'https://fake-json-api.mock.beeceptor.com',
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(async config => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
/*
I used this for login api because the base url is different from other apis. 
If I use the same base url for login api, it will return 404 error. 
So I created a separate instance for login api with different base url.
*/
export const loginBaseUrl = axios.create({
  baseURL: 'https://testapp.centropix.com/api/v1/',
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
});
