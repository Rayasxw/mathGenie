import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { tokens } from '../constants/constants';
import { useAuthStore } from '@src/widgets/login/store/useAuthStore';
import type { InternalAxiosRequestConfig } from 'axios';

interface RefreshTokenResponse {
  access: string;
}

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _isRetry?: boolean;
}
const BASE_URL = 'https://mathgenie-server.onrender.com/';
const createApi = (): AxiosInstance => axios.create({ baseURL: BASE_URL });

const $mainApi: AxiosInstance = createApi();
const $authApi: AxiosInstance = createApi();

const setAuthHeader = (config: InternalAxiosRequestConfig) => {
  const noAuthNeeded = ['/auth/login', '/auth/refresh'];
  if (!noAuthNeeded.includes(config.url || '')) {
    const accessToken = localStorage.getItem(tokens.access);
    if (accessToken && config.headers)
      config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
};

$mainApi.interceptors.request.use(setAuthHeader);
$authApi.interceptors.request.use(setAuthHeader);

$authApi.interceptors.response.use(
  (res) => res,
  async (error) => {
    const ogRequest = error.config as CustomAxiosRequestConfig;
    const logout = useAuthStore.getState().logout;

    if (error.response?.status === 401 && ogRequest && !ogRequest._isRetry) {
      ogRequest._isRetry = true;

      const refreshToken = localStorage.getItem(tokens.refresh);
      if (!refreshToken) {
        logout();
        return Promise.reject(error);
      }

      try {
        const response = await $authApi.post<RefreshTokenResponse>(
          '/auth/refresh',
          { refresh: refreshToken },
        );
        localStorage.setItem(tokens.access, response.data.access);

        ogRequest.headers = ogRequest.headers || {};
        ogRequest.headers.Authorization = `Bearer ${response.data.access}`;

        useAuthStore.getState().setAccessToken(response.data.access);

        return $authApi.request(ogRequest);
      } catch (refreshError) {
        logout();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export { $authApi, $mainApi };
