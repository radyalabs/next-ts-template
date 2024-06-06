import axios from 'axios';
import { setCookie } from 'cookies-next';
import { addDays } from 'date-fns';

import { APP_REFRESH_KEY, APP_TOKEN_KEY } from '@/constants/config';

import type { LoginResponse } from './Login.types';

// eslint-disable-next-line import/prefer-default-export
export const saveToken = (data: LoginResponse) => {
  const { accessToken, refreshToken } = data;
  const { exp = -1 } = JSON.parse(window.atob(accessToken.split('.')[1]));
  const expires = new Date(exp * 1000);
  setCookie(APP_TOKEN_KEY, accessToken, {
    expires,
    sameSite: true,
  });
  setCookie(APP_REFRESH_KEY, refreshToken, {
    expires: addDays(expires, 30),
    sameSite: true,
  });
  axios.defaults.headers.common = {
    Authorization: `Bearer ${accessToken}`,
  };
};
