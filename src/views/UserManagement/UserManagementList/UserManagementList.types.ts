export interface UserQueryParams {
  [key: string]: unknown;
  s: string;
  fullname: string;
  username: string;
  orderType: string;
  orderBy: string;
  page: number;
  size: number;
}

export interface FilterValue {
  role: string;
  status: string;
}

export interface SelectItem {
  value: string | number;
  label: string;
}
