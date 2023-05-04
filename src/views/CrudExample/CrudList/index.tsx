import Typography from '@/components/base/Typography';
import Table from '@/components/ui/DataTable';
import useCrudList from '@/views/CrudExample/CrudList/index.hooks';

const CrudList = () => {
  const {
    data,
    isLoading,
    tableColumns,
    queryParams,
    onPageChange,
  } = useCrudList();
  return (
    <>
      <Typography
        variant="h5"
        as="h1"
        className="font-bold"
        gutterBottom
      >
        Vehicle List
      </Typography>
      {(!isLoading && data) && (
        <Table
          data={data.payload.data || []}
          columns={tableColumns}
          dataRowKey="vehicleId"
          showPagination
          page={queryParams.page}
          onPageChange={onPageChange}
        />
      )}
    </>
  );
};

export default CrudList;
