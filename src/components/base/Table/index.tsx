import MUITable from '@mui/material/Table';
import MUITableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';

import type { TableProps } from './index.types';

const Table = (props: TableProps) => {
  const { children, className, stickyHeader } = props;
  return (
    <MUITable sx={{ minWidth: 650 }} className={`table-fixed w-full ${className}`} stickyHeader={stickyHeader}>
      {children}
    </MUITable>
  );
};

const TableRowHead = (props: TableProps) => {
  const { children, className } = props;
  return (
    <TableRow className={`uppercase [&>th]:font-bold [&>th]:text-gray-500 ${className}`}>
      {children}
    </TableRow>
  );
};

const TableBody = (props: TableProps) => {
  const { children, className } = props;
  return (
    <MUITableBody className={`[&>tr>td]:py-2 ${className}`}>
      {children}
    </MUITableBody>
  );
};

Table.TableBody = TableBody;
Table.TableCell = TableCell;
Table.TableHead = TableHead;
Table.TableRow = TableRow;
Table.TableRowHead = TableRowHead;
Table.TableSortLabel = TableSortLabel;

export default Table;
