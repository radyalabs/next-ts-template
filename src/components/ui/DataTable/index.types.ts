import type { TableColumn } from '@/types/tables';

export interface TableProps {
  data: Array<Record<string, unknown>>;
  dataRowKey: string;
  columns: TableColumn[];
  page?: number;
  pageSize?: number;
  showPagination?: boolean;
  onPageChange?: (page: number) => void;
  onQuickPageChange?: (page: number) => void;
  onPageSizeChange?: (page: number) => void;
  onFilterChange?: (filter: Record<string, string>) => void;
}

export interface TableHooksProps {
  onFilterChange?: (filter: Record<string, string>) => void;
}
