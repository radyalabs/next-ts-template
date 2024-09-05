import type { TableColumn } from '@/types/tables';

// eslint-disable-next-line import/prefer-default-export
export const TABLE_COLUMNS: TableColumn[] = [
  {
    name: 'Email',
    dataKey: 'email',
    sortable: true,
    sortKey: 'Email',
    width: 200,
  },
  {
    name: 'Full Name',
    dataKey: 'fullName',
    sortable: true,
    sortKey: 'FullName',
    width: 200,
  },
  {
    name: 'Status',
    dataKey: 'userOrganizationStatus',
    sortable: false,
    dataType: 'status',
  },
];
