import { useMutation } from '@tanstack/react-query';

import defaultFetcherFn from '@/helpers/fetcher';
import type { MutateQueryExtras } from '@/types/queries';

const useMutateData = <T = void>(
  key: string[],
  url: string,
  body: Record<string, unknown>,
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
  } = useMutation<T, Error>(
    key,
    () => defaultFetcherFn<T>({
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

export default useMutateData;
