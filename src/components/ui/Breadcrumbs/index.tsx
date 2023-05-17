import Link from 'next/link';

import MUIBreadcrumbs from '@mui/material/Breadcrumbs';

import Typography from '@/components/base/Typography';

import type { BreadcrumbsProps } from './index.types';

const Breadcrumbs = (props: BreadcrumbsProps) => {
  const { crumbs = [] } = props;
  return (
    <MUIBreadcrumbs aria-label="breadcrumb">
      {crumbs.map((el, i) => (
        i < crumbs.length - 1 && el.href ? (
          <Link color="inherit" className="text-gray-600 hover:underline no-underline" href={el.href}>
            {el.label}
          </Link>
        ) : (
          <Typography>{el.label}</Typography>
        )
      ))}
    </MUIBreadcrumbs>
  );
};

export default Breadcrumbs;
