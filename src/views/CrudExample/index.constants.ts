import { createColumnData } from '@/helpers';
import type { TableColumn } from '@/types/tables';

import type { UserQueryParams } from './index.types';

export const INIT_QUERY_PARAMS: UserQueryParams = {
  fullname: '',
  orderBy: '',
  orderType: '',
  page: 1,
  size: 10,
  username: '',
};

export const VEHICLE_TABLE_COLUMNS: TableColumn[] = [
  {
    name: 'User Name',
    dataKey: 'userName',
    sortable: true,
    sortKey: 'userName',
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

export const TABLE_COLUMNS: TableColumn[] = [
  createColumnData('User Name', 'username', false),
  createColumnData('Name', 'fullName', false),
  createColumnData('E-mail ', 'email', false),
  createColumnData('Dibuat Oleh', 'createdByName', false),
  createColumnData('Tgl Dibuat', 'createdAt', false),
  createColumnData('Diubah Oleh', 'lastUpdatedByName', false),
  createColumnData('Tgl Diubah', 'lastUpdatedAt', false),
];
