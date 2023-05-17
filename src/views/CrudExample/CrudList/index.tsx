import { Delete, FindInPage } from '@mui/icons-material';

import Typography from '@/components/base/Typography';
import Table from '@/components/ui/DataTable';
import useCrudList from '@/views/CrudExample/CrudList/index.hooks';

const CrudList = () => {
  const {
    data,
    isLoading,
    tableColumns,
    queryParams,
    handleDelete,
    handleDetail,
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
        data={(data && data.payload.data) || []}
        columns={tableColumns}
        uniqueRowKey="vehicleId"
        loading={isLoading}
        showPagination
        page={queryParams.page}
        onPageChange={onPageChange}
        onSortChange={onSortChange}
        rowActions={[
          {
            label: (
              <>
                <FindInPage />
                Detail
              </>
            ),
            onClick: (id) => handleDetail(id),
          },
          {
            label: (
              <>
                <Delete />
                Delete
              </>
            ),
            danger: true,
            onClick: (id) => handleDelete(id),
          },
        ]}
      />
    </>
  );
};

export default CrudList;
