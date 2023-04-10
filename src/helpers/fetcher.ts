import axios from 'axios';

import BASE_API_URL from '@/constants/apiURL';
import type { FetcherProps } from '@/types/fetcherProps';

const defaultFetcherFn = async <T>(options: FetcherProps<T>): Promise<T> => {
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
  return axios<T>({
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
