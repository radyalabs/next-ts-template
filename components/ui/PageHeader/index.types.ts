import type { ReactNode } from 'react';

import type { CrumbItem } from '@/components/ui/Breadcrumbs/index.types';

export interface PageHeaderProps {
  title: string;
  className?: string;
  crumbs?: CrumbItem[];
  showBackBtn?: boolean;
  onClickBackBtn?: () => void;
  children?: ReactNode;
}
