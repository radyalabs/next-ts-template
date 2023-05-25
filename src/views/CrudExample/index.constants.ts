import { createColumnData } from '@/helpers';
import type { TableColumn } from '@/types/tables';

import type { VehicleQueryParams } from './index.types';

export const INIT_QUERY_PARAMS: VehicleQueryParams = {
  filterBranchId: '',
  filterCreatedId: '',
  filterDateCreated: '',
  filterDescription: '',
  filterPoliceNo: '',
  filterVehicleId: '',
  filterVehicleType: '',
  index: 0,
  orderBy: '',
  orderType: '',
  page: 1,
  rows: 10,
  search: '',
};

export const TABLE_COLUMNS: TableColumn[] = [
  {
    name: 'Kode Kendaraan',
    dataKey: 'vehicleId',
    sortable: true,
    sortKey: 'vehicleId',
    width: 150,
  },
  createColumnData('Depo', 'branch', true, 'true'),
  createColumnData('Jenis Kendaraan', 'vehicleType', true, 'vehicleType'),
  {
    name: 'Deskripsi',
    dataKey: 'description',
    sortable: false,
    width: 180,
  },
  createColumnData('No. Polisi', 'policeNo', true, 'policeNo'),
  createColumnData('Dibuat Oleh', 'createdById', true, 'createdById'),
  createColumnData('Tgl Dibuat', 'createdDt', true, 'createdDt'),
];
