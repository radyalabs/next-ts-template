export interface QueryOptions<T> {
  enabled?: boolean,
  onError?: (error: Error) => void,
  onSuccess?: (data: T) => void,
  retry?: boolean | number,
}
