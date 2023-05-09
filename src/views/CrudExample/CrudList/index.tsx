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
    onSortChange,
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
      <Table
        data={data?.payload.data || []}
        columns={tableColumns}
        dataRowKey="vehicleId"
        loading={isLoading}
        showPagination
        page={queryParams.page}
        onPageChange={onPageChange}
        onSortChange={onSortChange}
      />
    </>
  );
};

export default CrudList;
