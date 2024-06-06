import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { defaultFetcherFn } from '@/helpers';
import type { FetchQueryExtras } from '@/types/queries';
import type { BaseError } from '@/types/responses';

const useGetData = <T, TParam = T>(
  key: string[],
  url: string,
  extras?: FetchQueryExtras<T, TParam>,
) => {
  const { options, params, normalizer } = extras || {};
  const { enabled = true, initialData = undefined, retry = 3 } = options || {};

  const {
    data, error, isError, isFetching, isLoading, refetch,
  } = useQuery<
  T,
  AxiosError<BaseError>
  >(
    {
      queryKey: key,
      queryFn: () => defaultFetcherFn<T, TParam>({
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'get',
        normalizer,
        url,
        params,
      }),
      initialData,
      enabled,
      retry,
    },
  );

  return {
    data,
    error,
    isError,
    isFetching,
    isLoading,
    refetch,
  };
};

export default useGetData;
