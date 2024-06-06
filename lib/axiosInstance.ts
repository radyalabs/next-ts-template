import type { AxiosInstance } from 'axios';
import axios from 'axios';
import { getCookie } from 'cookies-next';

import { BASE_API_URL, ENDPOINT } from '@/constants/apiURL';
import { APP_REFRESH_KEY, APP_TOKEN_KEY } from '@/constants/config';
import HTTP_CODE from '@/constants/httpCode';
import { saveToken } from '@/views/Login/Login.helpers';
import type { LoginResponse } from '@/views/Login/Login.types';

const axiosInstance = <T> (): AxiosInstance => {
  const axiosClient = axios.create();
  const { IDENTITY } = ENDPOINT;
  const token = getCookie(APP_TOKEN_KEY);
  const refreshToken = getCookie(APP_REFRESH_KEY);

  // Replace this with our own backend base URL
  axiosClient.defaults.baseURL = BASE_API_URL;

  axiosClient.defaults.headers.common = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  axiosClient.interceptors.request.use(
    (config) => {
      const newCfg = { ...config };
      if (token) {
        // Configure this as per your backend requirements
        newCfg.headers.Authorization = `Bearer ${token}`;
      }
      return newCfg;
    },
    (error) => Promise.reject(error),
  );

  axiosClient.interceptors.response.use(
    (res) => res,
    async (err) => {
      const originalConfig = err.config;
      if (originalConfig.url !== '/login' && err.response) {
        // Access Token was expired
        if (err.response.status === HTTP_CODE.unauthorized && !originalConfig.retry) {
          originalConfig.retry = true;

          try {
            const rs = await axios.post<LoginResponse>(
              BASE_API_URL + IDENTITY.REFRESH,
              { refreshToken },
            );
            const { data } = rs;
            saveToken(data);

            return await axiosClient(originalConfig);
          } catch (error) {
            return Promise.reject(err);
          }
        }
      }

      return Promise.reject(err);
    },
  );
  return axiosClient<T>;
};

export default axiosInstance;
