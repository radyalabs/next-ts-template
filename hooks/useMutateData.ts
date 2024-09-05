import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import fetcher from '@/lib/fetcher';
import type { MutateQueryExtras } from '@/types/queries';
import type { BaseError } from '@/types/responses';
import { noop } from '@/utils';

export const useMutateData = <T = void>(
  key: string[],
  url: string,
  method = 'post',
  extras?: MutateQueryExtras<T>,
) => {
  const { normalizer, params, options } = extras || {};
  const {
    headers,
    retry,
    onError,
    onMutate,
    onSettled = noop,
    onSuccess,
    onUploadProgress = noop,
  } = options || {};

  const {
    mutate,
    mutateAsync,
    data,
    isPending: isLoading,
  } = useMutation<T, AxiosError<BaseError>, unknown>({
    mutationKey: key,
    mutationFn: (body) => fetcher<T>({
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers,
      },
      params,
      data: body,
      method,
      normalizer,
      onUploadProgress,
      url,
    }),
    onSuccess,
    onError,
    onMutate,
    onSettled,
    retry,
  });

  return {
    data,
    mutate,
    mutateAsync,
    isLoading,
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

export const usePatchData = <T = void>(
  key: string[],
  url: string,
  extras?: MutateQueryExtras<T>,
) => useMutateData(key, url, 'patch', extras);

export const useDeleteData = <T = void>(
  key: string[],
  url: string,
  extras?: MutateQueryExtras<T>,
) => useMutateData(key, url, 'delete', extras);
