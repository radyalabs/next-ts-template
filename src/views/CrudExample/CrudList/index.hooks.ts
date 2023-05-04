import { useState } from 'react';

import { ENDPOINT } from '@/constants/apiURL';
import { createColumnData } from '@/helpers';
import useGetData from '@/hooks/useGetData';
import type { TableColumn } from '@/types/tables';
import { createQueryParams } from '@/utils';

import { INIT_QUERY_PARAMS } from './index.constants';
import vehicleListNormalizer from './index.normalizer';
import type { VehicleListResponse, VehicleQueryParams } from './index.types';

const useCrudList = () => {
  const tableColumns: TableColumn[] = [
    createColumnData('Kode Kendaraan', 'vehicleId', 'string', true),
    createColumnData('Depo', 'branch', 'string', true),
    createColumnData('Jenis Kendaraan', 'vehicleType', 'string', true),
    createColumnData('Deskripsi', 'description', 'string', false),
    createColumnData('No. Polisi', 'policeNo', 'string', true),
    createColumnData('Dibuat Oleh', 'createdById', 'string', true),
    createColumnData('Tgl Dibuat', 'createdDt', 'string', true),
  ];

  const [queryParams, setQueryParams] = useState<VehicleQueryParams>(INIT_QUERY_PARAMS);
  const onPageChange = (val: number) => {
    setQueryParams((prevState) => ({ ...prevState, page: val }));
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
    data, isLoading, tableColumns, queryParams, onPageChange,
  };
};

export default useCrudList;
