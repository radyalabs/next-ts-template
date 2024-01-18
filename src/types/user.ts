import type { AuditTrail, PaginationData } from '@/types/responses';

export interface User extends AuditTrail {
  [key: string]: unknown;
  email: string;
  fullName: string;
  username: string;
  lastPasswordChangeAt: string;
  userId: string;
  userOrganizationStatus: number;
  scopes: string[];
}

export type UserList = Omit<User, 'scopes'>;
export type UserListResponse = PaginationData<UserList>;
