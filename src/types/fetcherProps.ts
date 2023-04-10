export interface FetcherProps<T> {
  url: string;
  data?: Record<string, unknown>;
  normalizer?: (data: T) => T;
  headers?: Record<string, string>;
  params?: Record<string, unknown>;
  method: string;
}
