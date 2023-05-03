import React from 'react';

import {
  Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel,
} from '@mui/material';
import type { ChangeEvent } from 'react';
import useDataTable from 'src/components/ui/DataTable/index.hooks';
import type { TableProps } from 'src/components/ui/DataTable/index.types';

import Button from '@/components/base/Button';
import TextField from '@/components/base/Textfield';
import { noop } from '@/utils/index';

const DataTable = (props: TableProps) => {
  const {
    columns,
    data,
    dataRowKey,
    page = 1,
    pageSize = 10,
    showPagination = false,
    onPageChange = noop,
    onQuickPageChange = noop,
  } = props;
  const {
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
              >
                <TableSortLabel
                  active={false}
                  direction="asc"
                >
                  {column.name}
                </TableSortLabel>
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
                  width={150}

                >
                  {String(row[column.dataKey])}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {showPagination && (
        <div className="flex flex-row justify-end items-center p-4 [&>*]:mx-1 border-0 border-t border-solid border-neutral-300">
          <Button
            className="p-1 min-w-0 w-8"
            disabled={Number(page) === 1 || !page}
            onClick={() => onPageChange(Number(page) - 1)}
            variant="outline"
          >
            &lt;
          </Button>
          <TextField
            type="number"
            placeholder="Page"
            value={String(page || '')}
            size="small"
            className="m-0 w-14"
            onKeyUp={onSubmitPage}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onQuickPageChange(
              Number(e.target.value || 0),
            )}
          />
          <Button
            className="p-1 min-w-0 w-8"
            onClick={() => onPageChange(Number(page) + 1)}
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
