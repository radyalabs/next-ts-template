import type { SelectItem } from '@/types/inputs';
import type { SearchOptions } from '@/types/responses';

const filterOptionNormalizer = (
  data: SearchOptions,
): SelectItem[] => {
  const dataList = (data || []).map((item) => ({
    value: item.key || '',
    label: item.value || '',
  }));
  dataList.unshift({ label: 'All', value: '' });
  return dataList || [];
};

export default filterOptionNormalizer;
