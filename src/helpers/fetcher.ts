import type { AxiosError } from 'axios';
import { getCookie } from 'cookies-next';

import { BASE_API_URL } from '@/constants/apiURL';
import { APP_TOKEN_KEY } from '@/constants/config';
import type { FetcherProps } from '@/types/fetcherProps';
import type { BaseError } from '@/types/responses';
import { axiosInstance } from '@/utils';

const defaultFetcherFn = async <T, TParam = T>(options: FetcherProps<T, TParam>): Promise<T> => {
  getCookie(APP_TOKEN_KEY);
  const {
    url,
    data,
    normalizer,
    headers,
    method = 'get',
    params,
  } = options || {};
  const instance = axiosInstance();
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
      return normalizer(dataRes as unknown as TParam);
    }
    return dataRes;
  }).catch((error: AxiosError<BaseError>) => {
    throw error;
  });
};

export default defaultFetcherFn;
