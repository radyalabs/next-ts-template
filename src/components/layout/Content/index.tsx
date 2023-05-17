import React from 'react';

import useContent from './index.hooks';
import type { ContentProps } from './index.types';

const Content = (props: ContentProps) => {
  const { children } = props;
  const { isCollapsed } = useContent();
  return (
    <section
      className={`text-gray-600 body-font font-sans pt-20 relative w-auto
        ${!isCollapsed ? 'ml-64' : 'ml-24'} mb-12 px-8 transition-width transition-slowest ease`}
    >
      {children}
    </section>
  );
};
export default Content;
