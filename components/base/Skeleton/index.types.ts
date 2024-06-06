import type { ReactNode } from 'react';

export interface SkeletonProps {
  animation?: 'pulse'
  | 'wave'
  | false;
  children?: ReactNode;
  height?: number | string;
  variant?: 'circular'
  | 'rectangular'
  | 'rounded'
  | 'text';
  width?: number | string;
}
