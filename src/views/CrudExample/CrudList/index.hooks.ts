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

  const onPageChange = (val: number) => {
    setQueryParams((prevState) => ({ ...prevState, page: val }));
  };

  const onSortChange = (params: SortParam) => {
    const { key, direction } = params;
    setQueryParams((prevState) => ({ ...prevState, orderBy: key, orderType: direction }));
    updateURLQuery(router, queryParams);
  };

  // useEffect for watching query params change
  useEffect(() => {
    updateURLQuery(router, queryParams);
  }, [router, queryParams]);

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
