import { useState } from 'react';

import { ENDPOINT } from '@/constants/apiURL';
import createColumnData from '@/helpers/createColumnData';
import useGetData from '@/hooks/useGetData';
import type { TableColumn } from '@/types/tables';
import createQueryParams from '@/utils/createQueryParams';
import { INIT_QUERY_PARAMS } from '@/views/CrudExample/CrudList/index.constants';
import vehicleListNormalizer from '@/views/CrudExample/CrudList/index.normalizer';

import type { VehicleListResponse, VehicleQueryParams } from './index.types';

const useCrudList = () => {
  const tableColumns: TableColumn[] = [
    createColumnData('Kode Kendaraan', 'vehicleId', 'string'),
    createColumnData('Depo', 'branch', 'string'),
    createColumnData('Jenis Kendaraan', 'vehicleType', 'string'),
    createColumnData('Deskripsi', 'description', 'string'),
    createColumnData('No. Polisi', 'policeNo', 'string'),
    createColumnData('Dibuat Oleh', 'createdById', 'string'),
    createColumnData('Tgl Dibuat', 'createdDt', 'string'),
  ];

  const [queryParams, setQueryParams] = useState<VehicleQueryParams>(INIT_QUERY_PARAMS);
  const [page, setPage] = useState(1);
  const onPageChange = (val: number) => {
    setQueryParams((prevState) => ({ ...prevState, page: val }));
    setPage(val);
  };

  const onQuickPageChange = (val: number) => {
    setPage(val);
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
    data, isLoading, tableColumns, page, queryParams, onPageChange, onQuickPageChange,
  };
};

export default useCrudList;
