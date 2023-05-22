import type { Vehicle, VehicleListResponse } from 'src/views/CrudExample/index.types';

const vehicleListNormalizer = (data: VehicleListResponse): VehicleListResponse => {
  const {
    isSuccess,
    path,
    payload,
    message,
  } = data || {};
  const {
    data: vehicleData,
    hasNext,
    hasPrev,
    page,
    rows,
    totalPages,
    useInfiniteLoad,
  } = payload;

  const listData = (vehicleData || []).map((el): Vehicle => ({
    vehicleId: el.vehicleId || '',
    branchId: el.branchId || '',
    branch: (el.branchId && el.branch) ? `${el.branchId} - ${el.branch}` : '',
    policeNo: el.policeNo || '',
    vehicleTypeId: el.vehicleId || '',
    vehicleType: (el.vehicleTypeId && el.vehicleType) ? `${el.vehicleTypeId} - ${el.vehicleType}` : '',
    description: el.description || '',
    createdById: el.createdById || '',
    createdDt: el.createdDt || '',
    updatedById: el.updatedById || '',
  }));

  return {
    isSuccess: isSuccess || false,
    path: path || '',
    payload: {
      data: listData,
      hasNext: hasNext || false,
      hasPrev: hasPrev || false,
      page: page || 0,
      rows: rows || 0,
      totalPages: totalPages || 0,
      useInfiniteLoad: useInfiniteLoad || false,
    },
    message: message || '',
  };
};

export default vehicleListNormalizer;
