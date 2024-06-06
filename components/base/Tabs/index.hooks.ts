import { useState } from 'react';

import type { SyntheticEvent } from 'react';

import { noop } from '@/utils';

import type { TabsProps } from './index.types';

const useTabs = (props: Partial<TabsProps>) => {
  const {
    value: propValue,
    onChange = noop,
  } = props;
  const [value, setValue] = useState(propValue);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
    onChange(newValue);
  };

  return {
    value,
    handleChange,
  };
};

export default useTabs;
