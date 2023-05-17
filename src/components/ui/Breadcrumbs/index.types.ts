export interface BreadcrumbsProps {
  crumbs: CrumbItem[];
}

export interface CrumbItem {
  href?: string;
  label: string;
}
