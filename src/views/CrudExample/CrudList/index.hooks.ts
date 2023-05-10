import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { ENDPOINT } from '@/constants/apiURL';
import { updateURLQuery } from '@/helpers';
import useGetData from '@/hooks/useGetData';
import type { SortParam, TableColumn } from '@/types/tables';
import { createQueryParams } from '@/utils';

import { INIT_QUERY_PARAMS, TABLE_COLUMNS } from './index.constants';
import vehicleListNormalizer from './index.normalizer';
import type { VehicleListResponse, VehicleQueryParams } from './index.types';

const useCrudList = () => {
  const router = useRouter();
  const tableColumns: TableColumn[] = TABLE_COLUMNS;
  const [queryParams, setQueryParams] = useState<VehicleQueryParams>(INIT_QUERY_PARAMS);
  const initQuery = router.query;

  useEffect(() => {
    setQueryParams((prevState) => ({ ...prevState, ...initQuery }));
  }, [initQuery]);
  const updateQueryParams = (queryObject: Record<string, unknown>) => {
    setQueryParams((prevState) => {
      const newState: VehicleQueryParams = { ...prevState, ...queryObject };
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

  const { data, isLoading } = useGetData<VehicleListResponse>(
    ['vehicleList', createQueryParams(queryParams)],
    ENDPOINT.MASTER.VEHICLE,
    {
      params: queryParams,
      normalizer: vehicleListNormalizer,
    },
  );

  return {
    data, isLoading, tableColumns, queryParams, onPageChange, onSortChange,
  };
};

export default useCrudList;
