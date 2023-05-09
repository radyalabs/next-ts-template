import type { SortParam, TableColumn } from '@/types/tables';

export interface TableProps {
  data: Array<Record<string, unknown>>;
  dataRowKey: string;
  columns: TableColumn[];
  loading?: boolean;
  page?: number;
  pageSize?: number;
  showPagination?: boolean;
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (page: number) => void;
  onFilterChange?: (filter: Record<string, string>) => void;
  onSortChange?: (sortState: SortParam) => void;
}

export interface TableHooksProps {
  onFilterChange?: (filter: Record<string, string>) => void;
}

export interface SortState {
  active: boolean;
  direction: 'asc' | 'desc';
}

export interface DynamicSortState {
  [key: string]: SortState;
}
