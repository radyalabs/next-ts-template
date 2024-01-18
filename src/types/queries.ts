import type { AxiosError } from 'axios';

import type { BaseError } from '@/types/responses';

export interface QueryOptions<T> {
  onError?: (error: AxiosError<BaseError>, variables: unknown) => void,
  onSuccess?: (data: T) => void,
  retry?: boolean | number,
}

export interface QueryExtras<TData, TParam = TData> {
  normalizer?: (data: TParam) => TData,
}

export interface FetchOptions<T> extends QueryOptions<T> {
  enabled?: boolean,
  initialData?: T | undefined;
}

export type MutateOptions<T> = QueryOptions<T>;

export interface FetchQueryExtras<TData, TParam = TData> extends QueryExtras<TData, TParam> {
  params?: Record<string, unknown>,
  options?: FetchOptions<TData>
}

export interface MutateQueryExtras<T> extends QueryExtras<T> {
  options?: MutateOptions<T>
}
