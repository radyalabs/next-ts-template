import type { DropdownOption } from './forms';

export interface TableColumn {
  name: string;
  dataKey: string;
  sortable: boolean;
  sortKey?: string;
  width?: number;
  filterKey?: string;
  filterType?: 'text' | 'dropdown' | 'date' | null;
  filterOption?: DropdownOption[];
  filterPlaceholder?: string;
}

export interface SortParam {
  key: string;
  direction: string;
}
