import MUIPaper from '@mui/material/Paper';

import Typography from '@/components/base/Typography';

import type { PaperProps } from './index.types';

const Paper = (props: PaperProps) => {
  const { children, className = '', title = '' } = props;
  return (
    <MUIPaper className={className} elevation={0}>
      {!!title && (
        <div className="w-full">
          <Typography variant="title" size="large" className="font-secondary">{title}</Typography>
          <hr />
        </div>
      )}
      {children}
    </MUIPaper>
  );
};

export default Paper;
