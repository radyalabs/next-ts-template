import React from 'react';

import useContent from './index.hooks';
import type { ContentProps } from './index.types';

const Content = (props: ContentProps) => {
  const { children } = props;
  const { isCollapsed } = useContent();
  return (
    <section
      className={`text-gray-600 body-font font-sans pt-24 relative w-auto
        ${!isCollapsed ? 'ml-64' : 'ml-24'} px-8 transition-width transition-slowest ease`}
    >
      <div
        className="container p-6 bg-white rounded drop-shadow min-h-[640px] w-auto mx-6"
      >
        {children}
      </div>
    </section>
  );
};
export default Content;
