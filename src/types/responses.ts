export interface PaginationData<T> {
  items: T[],
  hasNextPage: boolean,
  page: number
  pageSize: number
}

export interface BaseError {
  code: number;
  message: string;
  payload?: ErrorPayload[];
}

export interface ErrorPayload {
  attemptedValue: string;
  errorCode: string;
  message: string;
  propertyName: string;
}

export interface BaseQueryParams {
  [key: string]: unknown;
  s?: string;
  page: number;
  size: number;
  orderType: string;
  orderBy: string;
}

export interface OptionItemResponse {
  key: string;
  value: string;
}

export interface AuditTrail {
  createdBy: string;
  createdByFullName: string;
  createdAt: string;
  lastUpdatedBy: string;
  lastUpdatedByFullName: string;
  lastUpdatedAt: string;
}

export type SearchOptions = OptionItemResponse[];
