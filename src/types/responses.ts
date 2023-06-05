export interface PaginationData<T> {
  items: T[],
  hasNextPage: boolean,
  page: number
  pageSize: number
}
