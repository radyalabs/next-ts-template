import type { SelectItem } from '@/types/inputs';

export interface TableColumn {
  name: string;
  dataKey: string;
  className?: string;
  dataType?: 'string' | 'updatedDate' | 'date' | 'number' | 'status' | 'action-detail';
  sortable: boolean;
  sortKey?: string;
  width?: number;
  filterKey?: string;
  filterType?: 'text' | 'dropdown' | 'date' | null;
  filterOption?: SelectItem[];
  filterPlaceholder?: string;
  sticky?: boolean;
  stickyPosition?: number;
  isArrayColumn?: boolean;
}

export interface SortParam {
  key: string;
  direction: string;
}
