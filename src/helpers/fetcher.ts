import axios from 'axios';
import { getCookie } from 'cookies-next';

import { BASE_API_URL } from '@/constants/apiURL';
import { APP_TOKEN_KEY } from '@/constants/config';
import type { FetcherProps } from '@/types/fetcherProps';

const defaultFetcherFn = async <T>(options: FetcherProps<T>): Promise<T> => {
  const token = getCookie(APP_TOKEN_KEY);
  const instance = axios.create();

  const {
    url,
    data,
    normalizer,
    headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method = 'get',
    params,
  } = options || {};

  if (token) {
    instance.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
    };
  }

  return instance<T>({
    baseURL: BASE_API_URL,
    data,
    headers,
    method,
    params,
    url,
  }).then((response) => {
    const dataRes = response.data;
    if (typeof normalizer === 'function') {
      return normalizer(dataRes);
    }
    return dataRes;
  });
};

export default defaultFetcherFn;
