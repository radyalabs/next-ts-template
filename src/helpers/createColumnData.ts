import type { DropdownOption } from '@/types/forms';
import type { TableColumn } from '@/types/tables';

const createColumnData = (
  name: string,
  dataKey: string,
  sortable: boolean,
  sortKey?: string,
  filterKey?: string,
  filterType?: 'text' | 'dropdown' | 'date' | null,
  filterPlaceholder?: string,
  filterOption?: DropdownOption[],
  width?: number,
): TableColumn => ({
  name,
  dataKey,
  filterKey,
  filterType,
  filterPlaceholder,
  filterOption,
  sortable,
  sortKey,
  width,
});

export default createColumnData;
