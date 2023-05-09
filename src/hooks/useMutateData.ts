import { useMutation } from '@tanstack/react-query';

import { defaultFetcherFn } from '@/helpers';
import type { MutateQueryExtras } from '@/types/queries';

const useMutateData = <T = void>(
  key: string[],
  url: string,
  method = 'post',
  extras?: MutateQueryExtras<T>,
) => {
  const { normalizer, options } = extras || {};
  const {
    onSuccess,
    onError,
    retry,
  } = options || {};
  const {
    mutate,
    data,
    isLoading,
  } = useMutation<T, Error, Record<string, unknown>>(
    key,
    (body) => defaultFetcherFn<T>({
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: body,
      method,
      normalizer,
      url,
    }),
    {
      onSuccess,
      onError,
      retry,
    },
  );

  return {
    data, mutate, isLoading,
  };
};

export const usePostData = <T = void>(
  key: string[],
  url: string,
  extras?: MutateQueryExtras<T>,
) => useMutateData(key, url, 'post', extras);

export const usePutData = <T = void>(
  key: string[],
  url: string,
  extras?: MutateQueryExtras<T>,
) => useMutateData(key, url, 'put', extras);

export const useDeleteData = <T = void>(
  key: string[],
  url: string,
  extras?: MutateQueryExtras<T>,
) => useMutateData(key, url, 'delete', extras);
