import Typography from '@/components/base/Typography';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

import type { PageHeaderProps } from './index.types';

const PageHeader = (props: PageHeaderProps) => {
  const { title, crumbs = [] } = props;

  return (
    <div className="mb-6">
      <Typography
        variant="h5"
        as="h1"
        className="font-bold"
        gutterBottom
      >
        {title}
      </Typography>
      {crumbs.length > 0 && <Breadcrumbs crumbs={crumbs} />}
    </div>
  );
};

export default PageHeader;
