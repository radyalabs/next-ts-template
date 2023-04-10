import { useQuery } from '@tanstack/react-query';

import defaultFetcherFn from '@/helpers/fetcher';
import type { QueryOptions } from '@/types/queries';
import { noop } from '@/utils';

const useGetData = <T>(
  key: string | string[],
  url: string,
  params?: Record<string, unknown>,
  normalizer?: (data: T) => T,
  options?: QueryOptions<T>,
) => {
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
    [key],
    () => defaultFetcherFn<T>({
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'get',
      normalizer,
      url,
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
