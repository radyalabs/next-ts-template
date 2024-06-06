import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { INITIAL_PAGESIZE } from '@/constants/config';
import type { BaseQueryParams } from '@/types/responses';
import type { SortParam } from '@/types/tables';
import { createQueryParams } from '@/utils';

const useQueryParams = (initValue?: BaseQueryParams) => {
  const router = useRouter();
  const pathname = usePathname() || '';
  const initQuery = useSearchParams();

  const [queryParams, setQueryParams] = useState<BaseQueryParams>(
    initValue || {
      s: '',
      page: 1,
      size: INITIAL_PAGESIZE,
      orderBy: '',
      orderType: '',
    },
  );

  // useEffect to update url on query param change
  useEffect(() => {
    router.replace(`${pathname}?${createQueryParams(queryParams)}`);
  }, [pathname, queryParams, router]);

  const updateQueryParams = (queryObject: BaseQueryParams) => {
    if (typeof queryObject !== 'undefined') {
      setQueryParams((prevState) => (prevState ? { ...prevState, ...queryObject } : queryObject));
    }
  };

  const onPageChange = (val: number) => {
    updateQueryParams({ ...queryParams, page: val });
  };

  const onFilterChange = (value: Record<string, unknown>) => {
    updateQueryParams({
      ...queryParams,
      ...value,
      page: 1,
    });
  };

  const onSortChange = (params: SortParam) => {
    const {
      key,
      direction,
    } = params;
    updateQueryParams({
      ...queryParams,
      page: 1,
      orderBy: key,
      orderType: direction,
    });
  };

  const onPageSizeChange = (val: number) => {
    updateQueryParams({ ...queryParams, size: val, page: 1 });
  };

  const onSearchChange = (val: string) => {
    updateQueryParams({ ...queryParams, s: val, page: 1 });
  };

  // useEffect to set init query from currentUrl
  useEffect(() => {
    if (initQuery) {
      const objectQuery = Object.fromEntries(initQuery.entries());
      setQueryParams((prevState) => ({ ...prevState, ...objectQuery }));
    }
  }, [initQuery]);

  return {
    queryParams,
    onFilterChange,
    onPageChange,
    onPageSizeChange,
    onSearchChange,
    onSortChange,
  };
};

export default useQueryParams;
