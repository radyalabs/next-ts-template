import React from 'react';

import {
  Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel,
} from '@mui/material';
import useDataTable from 'src/components/ui/DataTable/index.hooks';
import type { TableProps } from 'src/components/ui/DataTable/index.types';

import Button from '@/components/base/Button';
import TextField from '@/components/base/Textfield';
import { Spinner } from '@/components/icons';

const DataTable = (props: TableProps) => {
  const {
    columns,
    data,
    dataRowKey,
    loading = false,
    page = 1,
    pageSize = 10,
    showPagination = false,
  } = props;
  const {
    displayPage,
    sortState,
    handleChangePage,
    handleSort,
    onQuickPageChange,
    onSubmitPage,
  } = useDataTable(props);
  return (
    <div className="rounded-xl shadow-inner border-solid border border-neutral-300">
      <Table sx={{ minWidth: 650 }} aria-label="simple table" className="table-fixed w-full">
        <TableHead>
          <TableRow className="bg-neutral-300">
            {columns.map((column) => (
              <TableCell
                className="first:rounded-tl-xl last:rounded-tr-xl"
                sortDirection="asc"
                key={column.dataKey}
                classes={{ root: 'break-words' }}
                width={column.width}
              >
                {(column.sortable && column.sortKey) && Object.keys(sortState).length ? (
                  <TableSortLabel
                    active={sortState[column.sortKey].active}
                    direction={sortState[column.sortKey].direction}
                    onClick={() => handleSort(column.sortKey || '')}
                  >
                    {column.name}
                  </TableSortLabel>
                ) : column.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={String(row[dataRowKey])}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {columns.map((column) => (
                <TableCell
                  component="th"
                  scope="row"
                  key={`${column.dataKey}-${row[column.dataKey]}-${row[dataRowKey]}`}
                  className="break-words"
                >
                  {String(row[column.dataKey])}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {loading && (
        <div className="flex justify-center items-center w-full min-h-[500px]">
          <Spinner width={80} height={80} />
        </div>
      )}
      {showPagination && (
        <div className="flex flex-row justify-end items-center p-4 [&>*]:mx-1 border-0 border-t border-solid border-neutral-300">
          <Button
            className="p-1 min-w-0 w-8"
            disabled={Number(page) === 1 || !page}
            onClick={() => handleChangePage(Number(page) - 1)}
            variant="outline"
          >
            &lt;
          </Button>
          <TextField
            type="number"
            placeholder="Page"
            value={String(displayPage || '')}
            size="small"
            className="m-0 w-14"
            onKeyUp={onSubmitPage}
            onChange={onQuickPageChange}
          />
          <Button
            className="p-1 min-w-0 w-8"
            onClick={() => handleChangePage(Number(page) + 1)}
            disabled={data.length < pageSize}
            variant="outline"
          >
            &gt;
          </Button>
        </div>
      )}
    </div>
  );
};

export default DataTable;
