import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { INITIAL_PAGESIZE } from '@/constants/config';
import type { BaseQueryParams } from '@/types/responses';
import type { SortParam } from '@/types/tables';
import { createQueryParams } from '@/utils';

interface QueryParamsOptions {
  replaceURL?: boolean;
}

const useQueryParams = (initValue?: BaseQueryParams, options?: QueryParamsOptions) => {
  const { replaceURL = true } = options || {};
  const router = useRouter();
  const pathname = usePathname() || '';
  const initQuery = useSearchParams();
  const [queryParams, setQueryParams] = useState<BaseQueryParams>(initValue || {
    s: '',
    page: 1,
    size: INITIAL_PAGESIZE,
    orderBy: '',
    orderType: '',
  });
  const [filterParams, setFilterParams] = useState<Record<string, unknown>>({});
  const [isInit, setIsInit] = useState(false);

  const updateQueryParams = (queryObject: BaseQueryParams) => {
    if (typeof queryObject !== 'undefined') {
      const newQueryParams = queryParams ? ({ ...queryParams, ...queryObject }) : queryObject;
      setQueryParams(newQueryParams);
      if (replaceURL) {
        router.replace(`${pathname}?${createQueryParams(newQueryParams)}`);
      }
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

  const onFilterParamsChange = (value: Record<string, unknown>) => {
    setFilterParams({
      ...filterParams,
      ...value,
    });
  };

  const onApplyFilterParams = () => {
    updateQueryParams({ ...queryParams, ...filterParams, page: 1 });
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
    if (initQuery && !isInit) {
      const objectQuery = Object.fromEntries(initQuery.entries());
      setFilterParams((prevState) => ({ ...prevState, ...objectQuery }));
      setQueryParams((prevState) => ({ ...prevState, ...objectQuery }));
      setIsInit(true);
    }
  }, [initQuery, isInit]);

  return {
    filterParams,
    queryParams,
    onApplyFilterParams,
    onFilterChange,
    onFilterParamsChange,
    onPageChange,
    onPageSizeChange,
    onSearchChange,
    onSortChange,
  };
};

export default useQueryParams;
