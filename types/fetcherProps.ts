export interface FetcherProps<T, TParam = T> {
  url: string;
  data?: unknown;
  normalizer?: (data: TParam) => T;
  headers?: Record<string, string>;
  params?: Record<string, unknown>;
  method: string;
}
