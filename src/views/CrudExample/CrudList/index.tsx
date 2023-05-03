import Table from 'src/components/ui/DataTable';

import useCrudList from '@/views/CrudExample/CrudList/index.hooks';

const CrudList = () => {
  const {
    data,
    isLoading,
    tableColumns,
    page,
    onPageChange,
    onQuickPageChange,
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
          page={page}
          onPageChange={onPageChange}
          onQuickPageChange={onQuickPageChange}
        />
      )}
    </>
  );
};

export default CrudList;
