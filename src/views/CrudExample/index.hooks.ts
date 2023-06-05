import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { ENDPOINT } from '@/constants/apiURL';
import { updateURLQuery } from '@/helpers';
import useGetData from '@/hooks/useGetData';
import type { SortParam, TableColumn } from '@/types/tables';
import { createQueryParams } from '@/utils';
import userListNormalizer from '@/views/CrudExample/index.normalizer';

import { INIT_QUERY_PARAMS, TABLE_COLUMNS } from './index.constants';
import type { UserListResponse, UserQueryParams } from './index.types';

const useCrudList = () => {
  const router = useRouter();
  const tableColumns: TableColumn[] = TABLE_COLUMNS;
  const [queryParams, setQueryParams] = useState<UserQueryParams>(INIT_QUERY_PARAMS);
  const initQuery = router.query;

  useEffect(() => {
    setQueryParams((prevState) => ({ ...prevState, ...initQuery }));
  }, [initQuery]);
  const updateQueryParams = (queryObject: Record<string, unknown>) => {
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
    const { key, direction } = params;
    onPageChange(1);
    updateQueryParams({ orderBy: key, orderType: direction });
  };

  const handleDetail = (id: string) => {
    // TODO: detail handling logic, remove disable eslint
    // eslint-disable-next-line no-console
    console.log(id);
  };

  const handleDelete = (id: string) => {
    // TODO: delete handling logic, remove disable eslint
    // eslint-disable-next-line no-console
    console.log('delete', id);
  };

  const { data, isLoading } = useGetData<UserListResponse>(
    ['userList', createQueryParams(queryParams)],
    ENDPOINT.USER_MGMT.USERS,
    {
      params: queryParams,
      normalizer: userListNormalizer,
      options: {
        retry: 3,
      },
    },
  );

  return {
    data,
    isLoading,
    tableColumns,
    queryParams,
    handleDelete,
    handleDetail,
    onPageChange,
    onSortChange,
  };
};

export default useCrudList;
