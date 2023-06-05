import type { PaginationData } from '@/types/responses';

export interface Vehicle {
  [key: string]: unknown;
  vehicleId: string;
  branchId: string;
  branch: string;
  policeNo: string;
  vehicleTypeId: string;
  vehicleType: string;
  description: string;
  createdById: string;
  createdDt: string;
  updatedById: string;
}

export type VehicleListResponse = PaginationData<Vehicle>;

export interface VehicleQueryParams {
  [key: string]: unknown;
  search: string;
  orderBy: string;
  orderType: string;
  filterVehicleId: string;
  filterBranchId: string;
  filterPoliceNo: string;
  filterVehicleType: string;
  filterDescription: string;
  filterCreatedId: string;
  filterDateCreated: string;
  page: number;
  rows: number;
  index: number;
}

export interface User {
  userId: string;
  username: string;
  fullName: string;
  lastPasswordChangeAt: string;
  createdAt: string;
  createdByName: string;
}

export type UserListResponse = PaginationData<User>;

export interface UserQueryParams {
  [key: string]: unknown;
  username: string;
  fullname: string;
  orderType: string;
  orderBy: string;
  page: number;
  size: number;
}
