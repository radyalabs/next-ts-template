import type { ReactNode } from 'react';

import type { SortParam, TableColumn } from '@/types/tables';

export interface TableProps {
  appendHeader?: ReactNode;
  arrayColumnKey?: string;
  arrayColumnUniqueKey?: string;
  data: Array<Record<string, unknown>>;
  columns: TableColumn[];
  exportBtnLabel?: string;
  hasArrayColumn?: boolean;
  label?: Partial<TableLabel>;
  loading?: boolean;
  page?: number;
  pageSize?: number;
  rowActions?: ActionProps[];
  searchPlaceholder?: string;
  searchValue?: string;
  showCountTotal?: boolean;
  showExportButton?: boolean;
  showPagination?: boolean;
  showPageSizeChanger?: boolean;
  showSearch?: boolean;
  showAuditTrail?: boolean;
  statusLabels?: string[];
  totalData?: number;
  onClickDetail?: (id: string) => void;
  onClickExport?: () => void;
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (page: number) => void;
  onFilterChange?: (filter: Record<string, string>) => void;
  onSearchChange?: (query: string) => void;
  onSortChange?: (sortState: SortParam) => void;
  uniqueRowKey: string;
}

export interface ActionProps {
  color?: 'default' | 'primary' | 'success' | 'danger';
  onClick: (row: Record<string, unknown>) => void;
  icon?: string | ReactNode;
  disabledFn?: (row: Record<string, unknown>) => boolean;
  showFn?: (row: Record<string, unknown>) => boolean;
  tooltip?: string;
}

export interface SortState {
  active: boolean;
  direction: 'asc' | 'desc';
}

export interface DynamicSortState {
  [key: string]: SortState;
}

export interface TableLabel {
  emptyState: Partial<EmptyStateLabel>
}

export interface EmptyStateLabel {
  title: string;
  message: string;
}
