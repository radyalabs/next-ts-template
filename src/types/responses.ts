export interface BaseResponse<T> {
  isSuccess: boolean,
  message: string,
  path: string,
  payload: T,
}
export interface PaginationData<T> {
  page: number
  rows: number
  totalPages: number
  data: T[],
  useInfiniteLoad: boolean
  hasPrev: boolean
  hasNext: boolean
}
