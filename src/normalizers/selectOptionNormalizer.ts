import type { SelectItem } from '@/types/inputs';
import type { SearchOptions } from '@/types/responses';

const selectOptionNormalizer = (data: SearchOptions): SelectItem[] => {
  const dataList = (data || []).map((item) => ({
    value: item.key || '',
    label: item.value || '',
  }));
  return dataList || [];
};

export default selectOptionNormalizer;
