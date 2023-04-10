import axios from 'axios';

import BASE_API_URL from '@/constants/apiURL';
import type { FetcherProps } from '@/types/fetcherProps';

const defaultFetcherFn = async <T>(params: FetcherProps<T>): Promise<T> => {
  const {
    url,
    data,
    normalizer,
    headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method = 'get',
  } = params;
  return axios<T>({
    headers,
    url,
    data,
    method,
    baseURL: BASE_API_URL,
  }).then((response) => {
    const dataRes = response.data;
    if (typeof normalizer === 'function') {
      return normalizer(dataRes);
    }
    return dataRes;
  });
  // try {
  //   const dataRes = await axios<T>({
  //     headers,
  //     url,
  //     data,
  //     method,
  //     baseURL: BASE_API_URL,
  //   });
  //   if (typeof normalizer === 'function') {
  //     return normalizer(dataRes as T);
  //   }
  //   return dataRes as T;
  // } catch (error) {
  //   throw new Error('Terjadi kesalahan server.');
  // }
};

export default defaultFetcherFn;
