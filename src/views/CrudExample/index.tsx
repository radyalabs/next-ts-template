import Link from 'next/link';

import { Add, Delete, FindInPage } from '@mui/icons-material';

import Button from '@/components/base/Button';
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
      <div className="flex justify-between items-center mb-6">
        <PageHeader title="Vehicle List" crumbs={[{ label: 'Home', href: '/' }, { label: 'CRUD List' }]} />
        <Link href="/crud-example/create">
          <Button className="h-fit" color="primary" startIcon={<Add />}>
            Add Vehicle
          </Button>
        </Link>
      </div>
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
