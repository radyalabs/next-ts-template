import { type CSSProperties } from 'react';

import type { EChartsOption, SetOptionOpts } from 'echarts';

export interface ReactEChartsProps {
  option: EChartsOption;
  style?: CSSProperties;
  settings?: SetOptionOpts;
  loading?: boolean;
  theme?: 'light' | 'dark';
}
