import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { BASE_URL, tokens } from '../constants/constants';
import { useAuth } from '../hooks/useAuth';

interface RefreshTokenResponse {
  access: string;
}

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _isRetry?: boolean;
}
const createApi = (): AxiosInstance => axios.create({ baseURL: BASE_URL });

const $mainApi: AxiosInstance = createApi();
const $authApi: AxiosInstance = createApi();

$mainApi.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(tokens.access);
  if (accessToken && config.headers) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});
$authApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const ogRequest = error.config as CustomAxiosRequestConfig;
    const { logout } = useAuth.getState();

    if (error.response?.status === 401 && ogRequest && !ogRequest._isRetry) {
      ogRequest._isRetry = true;

      const refresh_token = localStorage.getItem(tokens.refresh);
      if (!refresh_token) {
        logout();
        return Promise.reject(error);
      }

      try {
        const response = await $authApi.post<RefreshTokenResponse>(
          'auth/refresh',
          { refresh_token },
        );

        localStorage.setItem(tokens.access, response.data.access);

        ogRequest.headers = ogRequest.headers || {};
        ogRequest.headers.Authorization = `Bearer ${response.data.access}`;

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
