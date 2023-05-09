import type { NextRouter } from 'next/router';

import { createQueryParams } from '@/utils';

const updateURLQuery = (router: NextRouter, query: Record<string, unknown>) => {
  router.replace({ query: createQueryParams(query) }, undefined, { shallow: true });
};

export default updateURLQuery;
