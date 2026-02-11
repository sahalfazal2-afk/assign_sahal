import { api } from './api';

export const getUsersListingApi = async (params?: {}) => {
  return api.get('/users', {
    params, // query params
  });
};

export const getUserDetailApi = async (params?: { id?: string }) => {
  return api.get(`/users/${params?.id}`, {
    params, // query params
  });
};
