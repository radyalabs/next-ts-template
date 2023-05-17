import MUIPaper from '@mui/material/Paper';

import type { PaperProps } from './index.types';

const Paper = (props: PaperProps) => {
  const { children, className = '' } = props;
  return (
    <MUIPaper className={className} elevation={3}>{children}</MUIPaper>
  );
};

export default Paper;
