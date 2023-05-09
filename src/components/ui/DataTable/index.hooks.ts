import { useEffect, useState } from 'react';

import type { ChangeEvent, KeyboardEvent } from 'react';

import { noop } from '@/utils';

import type {
  DynamicSortState, SortState,
  TableProps,
} from './index.types';

const useDataTable = (props: TableProps) => {
  const {
    columns, page = 1, onPageChange = noop, onSortChange = noop,
  } = props || {};
  const [displayPage, setDisplayPage] = useState(page);

  const [sortState, setSortState] = useState<DynamicSortState>({});

  // useEffect for initializing sortable column value
  useEffect(() => {
    const initState: DynamicSortState = {};
    columns.forEach((col) => {
      if (col.sortable && col.sortKey) {
        initState[col.sortKey] = {
          active: false,
          direction: 'asc',
        };
      }
    });
    setSortState(initState);
  }, [columns]);

  const onQuickPageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDisplayPage(Number(e.target.value));
  };

  const handleChangePage = (val: number) => {
    setDisplayPage(val);
    onPageChange(val);
  };

  const handleSort = (columnKey: string) => {
    setSortState((prevState) => {
      let columnState: SortState;
      if (!prevState[columnKey].active) {
        columnState = {
          active: true,
          direction: 'asc',
        };
      } else {
        columnState = {
          active: true,
          direction: 'desc',
        };
      }
      if (prevState[columnKey].direction === 'desc') {
        columnState = {
          active: false,
          direction: 'asc',
        };
      }
      const newState: DynamicSortState = {};
      Object.keys(prevState).forEach((key) => {
        if (key !== columnKey) {
          newState[key] = {
            active: false,
            direction: 'asc',
          };
          return;
        }
        newState[key] = columnState;
      });
      onSortChange(
        columnState.active
          ? { key: columnKey, direction: columnState.direction }
          : { key: '', direction: '' },
      );
      return newState;
    });
  };

  const onSubmitPage = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onPageChange(displayPage);
    }
  };

  return {
    displayPage,
    sortState,
    handleChangePage,
    handleSort,
    onQuickPageChange,
    onSubmitPage,
  };
};

export default useDataTable;
