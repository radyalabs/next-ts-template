import MUISkeleton from '@mui/material/Skeleton';

import type { SkeletonProps } from './index.types';

const Skeleton = (props: SkeletonProps) => {
  const {
    animation = 'pulse',
    children,
    height,
    variant = 'text',
    width,
  } = props;

  return (
    <MUISkeleton
      className={`scale-90 ${variant !== 'circular' ? 'rounded-xl' : ''} ${variant === 'text' ? 'scale-y-75 scale-x-100' : ''}`}
      animation={animation}
      height={height}
      variant={variant}
      width={width}

    >
      {children}
    </MUISkeleton>
  );
};

export default Skeleton;
