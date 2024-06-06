import Link from 'next/link';

import MUIBreadcrumbs from '@mui/material/Breadcrumbs';

import Typography from '@/components/base/Typography';

import type { BreadcrumbsProps } from './index.types';

const Breadcrumbs = (props: BreadcrumbsProps) => {
  const { crumbs = [] } = props;
  return (
    <MUIBreadcrumbs aria-label="breadcrumb" separator="›">
      {crumbs.map((el, i) => (
        i < crumbs.length - 1 && el.href ? (
          <Link color="inherit" key={`breadcrumb-segment-${el.label}`} className="[&>*]:text-n-8 hover:underline no-underline" href={el.href}>
            <Typography key={`breadcrumb-segment-${el.label}`}>{el.label}</Typography>
          </Link>
        ) : (
          <Typography key={`breadcrumb-segment-${el.label}`} className="text-n-8">{el.label}</Typography>
        )
      ))}
    </MUIBreadcrumbs>
  );
};

export default Breadcrumbs;
