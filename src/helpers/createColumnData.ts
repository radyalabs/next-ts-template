import type { DropdownOption } from '@/types/forms';
import type { TableColumn } from '@/types/tables';

const createColumnData = (
  name: string,
  dataKey: string,
  dataType: 'string' | 'number' | 'date' | 'currency',
  sortable: boolean,
  filterKey?: string,
  filterType?: 'text' | 'dropdown' | 'date' | null,
  filterPlaceholder?: string,
  filterOption?: DropdownOption[],
  width?: string,
): TableColumn => ({
  name,
  dataKey,
  dataType,
  filterKey,
  filterType,
  filterPlaceholder,
  filterOption,
  sortable,
  width,
});

export default createColumnData;
