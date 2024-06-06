import type { TextSkeletonProps } from './index.types';

import styles from './index.module.scss';

const TextSkeleton = (props: TextSkeletonProps) => {
  const { width = 'md', className } = props;
  const skeletonStyle = [styles.skeleton];

  if (className) skeletonStyle.push(className);

  if (width === 'sm') skeletonStyle.push(styles.sm);
  if (width === 'md') skeletonStyle.push(styles.md);
  if (width === 'lg') skeletonStyle.push(styles.lg);
  if (width === 'xl') skeletonStyle.push(styles.xl);

  return (
    <div className={`bg-n-4 h-4 rounded-xl animate-pulse ${skeletonStyle.join(' ')}`} />
  );
};

export default TextSkeleton;
