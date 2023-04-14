export interface BaseResponse<T> {
  isSuccess: boolean,
  message: string,
  path: string,
  payload: T,
}
