import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { ENDPOINT } from '@/constants/apiURL';
import { useModalContext } from '@/contexts/ModalContext';
import { updateURLQuery } from '@/helpers';
import useGetData from '@/hooks/useGetData';
import { useDeleteData } from '@/hooks/useMutateData';
import { userListNormalizer } from '@/normalizers';
import type { SortParam, TableColumn } from '@/types/tables';
import type { User, UserListResponse } from '@/types/user';
import { createQueryParams } from '@/utils';

import { INIT_QUERY_PARAMS, TABLE_COLUMNS } from './UserManagementList.constants';
import type { UserQueryParams } from './UserManagementList.types';

const useUserManagementList = () => {
  const router = useRouter();
  const { query: initQuery } = router;
  const modal = useModalContext();
  const tableColumns: TableColumn[] = TABLE_COLUMNS;
  const { USER_MGMT } = ENDPOINT;
  const [queryParams, setQueryParams] = useState<UserQueryParams>(INIT_QUERY_PARAMS);
  const [selectedId, setSelectedId] = useState('');
  const updateQueryParams = (queryObject: Partial<UserQueryParams>) => {
    setQueryParams((prevState) => {
      const newState: UserQueryParams = { ...prevState, ...queryObject };
      updateURLQuery(router, newState);
      return newState;
    });
  };

  const onPageChange = (val: number) => {
    updateQueryParams({ page: val });
  };

  const onSortChange = (params: SortParam) => {
    const {
      key,
      direction,
    } = params;
    onPageChange(1);
    updateQueryParams({
      orderBy: key,
      orderType: direction,
    });
  };

  const onPageSizeChange = (val: number) => {
    updateQueryParams({ size: val });
  };

  const onSearchChange = (val: string) => {
    updateQueryParams({ s: val });
  };

  const handleDetail = (id: string) => {
    router.push(`/user-access-management/detail/${id}`);
  };

  const handleEdit = (id: string) => {
    router.push(`/user-access-management/edit/${id}`);
  };

  useEffect(() => {
    setQueryParams((prevState) => ({ ...prevState, ...initQuery }));
  }, [initQuery]);

  const {
    data,
    isLoading,
    refetch,
  } = useGetData<UserListResponse>(
    ['userList', createQueryParams(queryParams)],
    USER_MGMT.USERS,
    {
      params: queryParams,
      normalizer: userListNormalizer,
    },
  );

  const { mutate: mutateDelete } = useDeleteData(
    ['userDelete'],
    USER_MGMT.USERS_BY_ID(selectedId),
    {
      options: {
        onSuccess: () => {
          modal.closeConfirm();
          refetch();
          modal.success({
            title: 'Successfully',
            content: 'Selected data successfully deleted',
            onConfirm: () => modal.closeConfirm(),
          });
        },
        onError: (error) => {
          const { response } = error || {};
          const { data: errorData } = response || {};
          const { message } = errorData || {};
          modal.confirm({
            title: 'Data cannot be deleted',
            content: message || 'Terjadi kesalahan pada server',
            showCancel: false,
            onConfirm: () => modal.closeConfirm(),
            onCancel: () => modal.closeConfirm(),
          });
        },
      },
    },
  );

  const handleDelete = (userData: User) => {
    setSelectedId(userData.userId);
    modal.confirm({
      title: 'Delete selected data?',
      content: `Are you sure you want to delete "${userData.fullName}"?`,
      buttonProps: {
        confirm: {
          label: 'Delete',
        },
      },
      onConfirm: () => {
        modal.setConfirmLoading(true);
        mutateDelete({});
      },
      onCancel: () => modal.closeConfirm(),
      danger: true,
    });
  };

  return {
    data,
    isLoading,
    tableColumns,
    queryParams,
    handleDelete,
    handleDetail,
    handleEdit,
    onPageChange,
    onPageSizeChange,
    onSearchChange,
    onSortChange,
  };
};

export default useUserManagementList;
