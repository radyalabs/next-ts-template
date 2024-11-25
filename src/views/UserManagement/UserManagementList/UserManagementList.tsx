'use client';

import Link from 'next/link';

import Button from '@/components/base/Button';
import Paper from '@/components/base/Paper';
import {
  IcAdd,
  IcEdit,
  IcEyeOpen,
  IcTrash,
} from '@/components/icons';
import Table from '@/components/ui/DataTable';
import PageHeader from '@/components/ui/PageHeader';
import type { User } from '@/types/user';
import { TABLE_COLUMNS } from '@/views/UserManagement/UserManagementList/UserManagementList.constants';

import useUserManagementList from './UserManagementList.hooks';

const UserManagementList = () => {
  const {
    queryParams,
    handleDelete,
    handleDetail,
    handleEdit,
    onPageChange,
    onPageSizeChange,
    onSearchChange,
    onSortChange,
    isLoading,
    dataUser,
  } = useUserManagementList();

  return (
    <>
      <PageHeader
        title="List User Access Management"
        crumbs={[{ label: 'List User Access Management' }]}
        className="mb-6"
      >
        <Link href="/user-access-management/create">
          <Button
            className="h-fit"
            color="primary"
            startIcon={<IcAdd />}
          >
            Create User
          </Button>
        </Link>
      </PageHeader>
      <Paper className="p-4">
        <Table
          columns={TABLE_COLUMNS}
          data={(dataUser && dataUser.items) || []}
          loading={isLoading}
          onPageChange={onPageChange}
          onPageSizeChange={onPageSizeChange}
          onSearchChange={onSearchChange}
          onSortChange={onSortChange}
          page={queryParams.page}
          pageSize={queryParams.size}
          searchValue={queryParams.s}
          hasNextPage={(dataUser && dataUser.hasNextPage) || true}
          rowActions={[
            {
              color: 'primary',
              icon: <IcEyeOpen />,
              onClick: (row) => handleDetail(String(row.userId)),
              tooltip: 'View detail',
            },
            {
              color: 'success',
              icon: <IcEdit />,
              onClick: (row) => handleEdit(String(row.userId)),
              tooltip: 'Edit data',
            },
            {
              color: 'danger',
              icon: <IcTrash />,
              onClick: (row) => handleDelete(row as User),
              tooltip: 'Delete data',
            },
          ]}
          searchPlaceholder="Search by Name"
          showPagination
          uniqueRowKey="userId"
        />
      </Paper>
    </>
  );
};

export default UserManagementList;
