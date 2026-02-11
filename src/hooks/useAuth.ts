import { useState } from 'react';
import { loginApi } from '@services/auth.api';
import { setToken, removeToken } from '@services/storage';
import { navigateAndReset } from '@navigations/navigationRef';
import { routes } from '@utils';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);

      const res = await loginApi({ email, password });
      const token = res.data.auth.token;

      await setToken(token);
      setIsAuthenticated(true);
      navigateAndReset(routes.DASHBOARD);
    } catch (error) {
      console.log('Login error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await removeToken();
    setIsAuthenticated(false);
    navigateAndReset(routes.LOGIN);
  };

  return {
    login,
    logout,
    loading,
    isAuthenticated,
  };
};
