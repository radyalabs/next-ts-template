import type { SelectItem } from '@/types/inputs';

const useAutocomplete = () => {
  const defaultIsEqualToOption = (option: SelectItem, selectedValue: SelectItem) => (
    option.value === selectedValue.value
  );

  return { defaultIsEqualToOption };
};

export default useAutocomplete;
