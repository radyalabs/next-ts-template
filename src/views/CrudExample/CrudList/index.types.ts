import type { BaseResponse, PaginationData } from '@/types/responses';

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

export type VehicleListResponse = BaseResponse<PaginationData<Vehicle>>;

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
