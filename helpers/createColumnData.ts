import type { SelectItem } from '@/types/inputs';
import type { TableColumn } from '@/types/tables';

const createColumnData = (
  name: string,
  dataKey: string,
  sortable: boolean,
  sortKey?: string,
  filterKey?: string,
  filterType?: 'text' | 'dropdown' | 'date' | null,
  filterPlaceholder?: string,
  filterOption?: SelectItem[],
  width?: number,
): TableColumn => ({
  name,
  dataKey,
  filterKey,
  filterType,
  filterPlaceholder,
  filterOption,
  sortable,
  sortKey: sortKey || '',
  width,
});

export default createColumnData;
