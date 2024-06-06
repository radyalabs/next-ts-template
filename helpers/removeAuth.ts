import axios from 'axios';
import { deleteCookie } from 'cookies-next';

import { APP_REFRESH_KEY, APP_TOKEN_KEY } from '@/constants/config';

const removeAuth = () => {
  deleteCookie(APP_TOKEN_KEY);
  deleteCookie(APP_REFRESH_KEY);
  delete axios.defaults.headers.common.Authorization;
};

export default removeAuth;
