import type { DropdownOption } from './forms';

export interface TableColumn {
  name: string;
  dataKey: string;
  dataType: 'string' | 'number' | 'date' | 'currency';
  sortable: boolean;
  width?: string;
  filterKey?: string;
  filterType?: 'text' | 'dropdown' | 'date' | null;
  filterOption?: DropdownOption[];
  filterPlaceholder?: string;
}
