import { ENDPOINT } from '@/constants/apiURL';
import createColumnData from '@/helpers/createColumnData';
import useGetData from '@/hooks/useGetData';
import type { TableColumn } from '@/types/tables';
import vehicleListNormalizer from '@/views/CrudExample/CrudList/index.normalizer';

import type { VehicleListResponse } from './index.types';

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

  const { data, isLoading } = useGetData<VehicleListResponse>(
    ['vehicleList'],
    ENDPOINT.MASTER.VEHICLE,
    {
      normalizer: vehicleListNormalizer,
    },
  );

  return { data, isLoading, tableColumns };
};

export default useCrudList;
