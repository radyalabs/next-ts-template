import Table from 'src/components/base/DataTable';

import useCrudList from '@/views/CrudExample/CrudList/index.hooks';

const CrudList = () => {
  const {
    data,
    isLoading,
    tableColumns,
  } = useCrudList();
  return (
    <>
      <div>Crud Example</div>
      {(!isLoading && data) && (
        <Table
          data={data.payload.data || []}
          columns={tableColumns}
          dataRowKey="vehicleId"
          showPagination
        />
      )}
    </>
  );
};

export default CrudList;
