import type { KeyboardEvent } from 'react';

import type { TableProps } from '@/components/ui/DataTable/index.types';
import noop from '@/utils/noop';

const useDataTable = (props: TableProps) => {
  const { page = 1, onPageChange = noop } = props || {};
  const onSubmitPage = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onPageChange(page);
    }
  };

  return {
    onSubmitPage,
  };
};

export default useDataTable;
