import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import fetcher from '@/lib/fetcher';
import type { FetchQueryExtras } from '@/types/queries';
import type { BaseError } from '@/types/responses';

const useGetData = <T, TParam = T>(
  key: string[],
  url: string,
  extras?: FetchQueryExtras<T, TParam>,
) => {
  const { options, params, normalizer } = extras || {};
  const {
    enabled = true,
    initialData = undefined,
    retry = 1,
    responseType,
  } = options || {};

  const {
    data,
    error,
    isError,
    isFetching,
    isLoading,
    refetch,
  } = useQuery<T, AxiosError<BaseError>>({
    queryKey: key,
    queryFn: () => fetcher<T, TParam>({
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      responseType,
      method: 'get',
      normalizer,
      url,
      params,
    }),
    enabled,
    initialData,
    retry,
    refetchOnWindowFocus: false,
  });

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
