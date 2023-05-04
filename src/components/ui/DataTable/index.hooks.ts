import { useState } from 'react';

import type { ChangeEvent, KeyboardEvent } from 'react';

import type { TableProps } from '@/components/ui/DataTable/index.types';
import { noop } from '@/utils';

const useDataTable = (props: TableProps) => {
  const { page = 1, onPageChange = noop } = props || {};
  const [displayPage, setDisplayPage] = useState(page);

  // const [sortState, setSortState] = useState({
  //   active: false,
  //   direction: SORT_DIRECTION.ASC,
  // });
  const onQuickPageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDisplayPage(Number(e.target.value));
  };

  const handleChangePage = (val: number) => {
    setDisplayPage(val);
    onPageChange(val);
  };
  const onSubmitPage = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onPageChange(displayPage);
    }
  };

  return {
    displayPage,
    handleChangePage,
    onQuickPageChange,
    onSubmitPage,
  };
};

export default useDataTable;
