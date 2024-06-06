import type { ReactNode } from 'react';

export interface TabPanelProps {
  children: ReactNode;
  value: number;
  index: number;
}

export interface TabsProps {
  children: ReactNode;
  value: number;
  labels: string[];
  counters: number[];
  onChange: (tabIndex: number) => void;
  hrefs?: string[];
}
