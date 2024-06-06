import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import type { ChangeEvent, KeyboardEvent } from 'react';

import type { ModifiedSelectChangeEvent } from '@/components/base/Select/index.types';
import { useModalContext } from '@/contexts/ModalContext';
import type { SelectItem } from '@/types/inputs';
import { noop } from '@/utils';

import type {
  DynamicSortState, SortState,
  TableProps,
} from './index.types';

const useDataTable = <T>(props: TableProps<T>) => {
  const {
    columns,
    data,
    loading,
    page = 1,
    pageSize,
    searchValue = '',
    onFilterChange,
    uniqueRowKey,
    selectedRows = [],
    onPageSizeChange = noop,
    onPageChange = noop,
    onSearchChange = noop,
    onSortChange = noop,
    setSelectedRows = noop,
    setSelectAll = noop,
  } = props || {};
  const query = useSearchParams();
  const modal = useModalContext();

  const [displayPage, setDisplayPage] = useState(page);
  const [displayPageSize, setDisplayPageSize] = useState(pageSize);
  const [pageBefore, setPageBefore] = useState(page);
  const [sortState, setSortState] = useState<DynamicSortState>(() => {
    const initState: DynamicSortState = {};
    columns.forEach((col) => {
      if (col.sortable && col.sortKey) {
        initState[col.sortKey] = {
          active: false,
          direction: 'asc',
        };
      }
    });
    initState.lastUpdatedAt = {
      active: false,
      direction: 'asc',
    };
    return initState;
  });
  const [searchQuery, setSearchQuery] = useState(searchValue);
  const [openAuditTrail, setOpenAuditTrail] = useState(false);
  const [auditData, setAuditData] = useState<Record<string, unknown>>({});

  const [filterValues, setFilterValues] = useState<string[]>([]);
  const [filterInputValues, setFilterInputValues] = useState<string[]>([]);

  const initFilterVal: string[] = Array(columns.length).fill('');
  for (const [key, value] of (query || []).entries()) {
    const colIndex = columns.findIndex((col) => col.filterKey === key);
    if (colIndex > -1 && typeof value === 'string') {
      initFilterVal[colIndex] = value;
    }
  }

  const filterExist = columns.find((col) => col.filterKey);

  const pageSizeOptions: SelectItem[] = [
    {
      label: '25',
      value: 25,
    },
    {
      label: '50',
      value: 50,
    },
    {
      label: '75',
      value: 75,
    },
    {
      label: '100',
      value: 100,
    },
  ];

  // useEffect for syncing displayPage and page
  useEffect(() => {
    setDisplayPage(page);
  }, [page]);

  // useEffect for syncing displayPageSize and page
  useEffect(() => {
    setDisplayPageSize(pageSize);
  }, [pageSize]);

  // useEffect for syncing searchQuery and searchValue
  useEffect(() => {
    setSearchQuery(searchValue);
  }, [searchValue]);

  const onQuickPageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDisplayPage(Number(e.target.value));
  };

  const handleChangePage = useCallback((val: number) => {
    setPageBefore(page);
    setDisplayPage(val);
    onPageChange(val);
  }, [onPageChange, page]);

  // useEffect to return to previous page when no data on current page
  useEffect(() => {
    if (page > 1 && !loading && data.length === 0) {
      modal.confirm({
        title: 'No Data',
        content: 'There is no data on this page, click ok to return to previous page!',
        showCancel: false,
        onConfirm: () => {
          modal.closeConfirm();
          handleChangePage(pageBefore);
        },
      });
    }
  }, [data, handleChangePage, loading, modal, page, pageBefore]);

  const handleFilterChange = (value: string, i: number, key: string) => {
    setFilterValues((prevState) => {
      const newVal = [...prevState, ...initFilterVal];
      newVal[i] = value;
      return newVal;
    });
    if (onFilterChange) {
      onFilterChange({ [key]: value });
    }
  };

  const handleFilterInputChange = (value: string, i: number) => {
    setFilterInputValues((prevState) => {
      const newVal = [...prevState, ...initFilterVal];
      newVal[i] = value;
      return newVal;
    });
  };

  const handlePageSizeChange = (e: ModifiedSelectChangeEvent) => {
    const value = Number(e.target.value);
    setDisplayPageSize(value);
    onPageSizeChange(value);
  };
  const handleSearchQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
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
      setPageBefore(page);
      onPageChange(displayPage);
    }
  };

  const submitSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearchChange(searchQuery);
    }
  };

  const handleOpenAuditTrail = (auditTrailData: Record<string, unknown>) => {
    setOpenAuditTrail(true);
    setAuditData(auditTrailData);
  };

  const handleCloseAuditTrail = () => {
    setOpenAuditTrail(false);
  };

  const handleRowSelect = (row: T) => {
    const newSelectedRows = [...selectedRows];
    const rowId = String(row[uniqueRowKey]);
    const index = newSelectedRows.indexOf(rowId);
    if (index === -1) {
      newSelectedRows.push(rowId);
      if (newSelectedRows.length === data.length) {
        setSelectAll(true);
      }
    } else {
      newSelectedRows.splice(index, 1);
      if (newSelectedRows.length < data.length) {
        setSelectAll(false);
      }
    }
    setSelectedRows(newSelectedRows);
  };

  const handleSelectAll = (e: ChangeEvent<HTMLInputElement>) => {
    const newSelectedRows = e.target.checked
      ? data.map((row) => String(row[uniqueRowKey]))
      : [];
    setSelectedRows(newSelectedRows);
    setSelectAll(e.target.checked);
  };

  return {
    auditData,
    displayPage,
    displayPageSize,
    filterExist,
    filterInputValues,
    filterValues,
    initFilterVal,
    openAuditTrail,
    pageSizeOptions,
    sortState,
    searchQuery,
    handleChangePage,
    handleCloseAuditTrail,
    handleFilterChange,
    handleFilterInputChange,
    handleOpenAuditTrail,
    handlePageSizeChange,
    handleSearchQueryChange,
    handleSort,
    onQuickPageChange,
    onSubmitPage,
    submitSearch,
    handleRowSelect,
    handleSelectAll,
  };
};

export default useDataTable;
