import type { PaginationData } from '@/types/responses';

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

export interface Users {
  [key: string]: unknown;
  id: string;
  name: string;
  email: string;
  role: string | null;
  email_verified_at: Date | null;
  password: string;
  remember_token: string | null;
  created_at: Date | null;
  updated_at: Date | null;
}

export type UserProps = {
  Users: Users[]
};

export type UserResponse = PaginationData<Users>;
