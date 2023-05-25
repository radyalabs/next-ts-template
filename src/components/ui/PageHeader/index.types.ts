import type { CrumbItem } from '@/components/ui/Breadcrumbs/index.types';

export interface PageHeaderProps {
  title: string;
  crumbs?: CrumbItem[];
}
