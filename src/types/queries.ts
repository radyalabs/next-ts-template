export interface QueryOptions<T> {
  onError?: (error: Error) => void,
  onSuccess?: (data: T) => void,
  retry?: boolean | number,
}

export interface QueryExtras<T> {
  normalizer?: (data: T) => T,
}

export interface FetchOptions<T> extends QueryOptions<T> {
  enabled?: boolean,
  initialData?: T | undefined;
}

export type MutateOptions<T> = QueryOptions<T>;

export interface FetchQueryExtras<T> extends QueryExtras<T> {
  params?: Record<string, unknown>,
  options?: FetchOptions<T>
}

export interface MutateQueryExtras<T> extends QueryExtras<T> {
  options?: MutateOptions<T>
}
