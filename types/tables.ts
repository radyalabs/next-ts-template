import type { DatePickerView } from '@/components/base/DatePicker/index.types';
import type { SelectItem } from '@/types/inputs';

type SortableColumn = {
  sortable: true,
  sortKey: string,
} | {
  sortable: false,
};

type DataType = 'string' | 'updatedDate' | 'date' | 'number' | 'status' | 'action-detail' | 'element';
type FilterType = 'text' | 'dropdown' | 'date' | null;

export type TableColumn<T extends string = string> = {
  name: string;
  dataKey: T;
  disableKey?: string;
  className?: string;
  dataType?: DataType;
  filterType?: FilterType;
  filterKey?: string;
  filterPlaceholder?: string;
  filterOption?: SelectItem[];
  hideColumn?: boolean;
  dateViews?: DatePickerView[];
  width?: number;
  sticky?: boolean;
  stickyPosition?: number;
  isArrayColumn?: boolean;
  searchable?: boolean;
} & SortableColumn;

export interface SortParam {
  key: string;
  direction: string;
}
