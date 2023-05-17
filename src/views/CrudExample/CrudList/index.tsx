import { Delete, FindInPage } from '@mui/icons-material';

import Paper from '@/components/base/Paper';
import Table from '@/components/ui/DataTable';
import PageHeader from '@/components/ui/PageHeader';

import useCrudList from './index.hooks';

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
      <PageHeader title="Vehicle List" crumbs={[{ label: 'Home', href: '/' }, { label: 'CRUD List' }]} />
      <Paper className="p-4">
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
      </Paper>
    </>
  );
};

export default CrudList;
