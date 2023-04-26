import { useQuery } from '@tanstack/react-query';

import defaultFetcherFn from '@/helpers/fetcher';
import type { FetchQueryExtras } from '@/types/queries';
import { noop } from '@/utils/index';

const useGetData = <T>(
  key: string[],
  url: string,
  extras?: FetchQueryExtras<T>,
) => {
  const {
    options,
    params,
    normalizer,
  } = extras || {};
  const {
    enabled = true,
    retry = true,
    onSuccess = noop,
    onError = noop,
  } = options || {};
  const {
    data,
    error,
    isFetching,
    isLoading,
    refetch,
  } = useQuery<T, Error>(
    key,
    () => defaultFetcherFn<T>({
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'get',
      normalizer,
      url,
      params,
    }),
    {
      enabled,
      onSuccess,
      onError,
      retry,
    },
  );
  return {
    data,
    error,
    isFetching,
    isLoading,
    refetch,
  };
};

export default useGetData;
