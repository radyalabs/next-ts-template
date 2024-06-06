import MUITypography from '@mui/material/Typography';

import Skeleton from '@/components/base/Skeleton';

import type { TypographyProps } from './index.types';

import styles from './index.module.scss';

const Typography = (props: TypographyProps) => {
  const {
    align = 'inherit',
    as = 'p',
    children,
    className,
    loading,
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    size = 'medium',
    type = 'primary',
    variant = 'body',
  } = props;

  const typographyStyle = [styles.typography];

  if (className) typographyStyle.push(className);

  if (type === 'primary') typographyStyle.push(styles.primary);
  if (type === 'secondary') typographyStyle.push(styles.secondary);

  if (variant === 'body') typographyStyle.push(styles.body);
  if (variant === 'display') typographyStyle.push(styles.display);
  if (variant === 'title') typographyStyle.push(styles.title);
  if (variant === 'label') typographyStyle.push(styles.label);
  if (variant === 'headline') typographyStyle.push(styles.headline);
  if (variant === 'link') {
    typographyStyle.push(styles.body);
    typographyStyle.push(styles.link);
  }

  if (size === 'small') typographyStyle.push(styles.small);
  if (size === 'medium') typographyStyle.push(styles.medium);
  if (size === 'large') typographyStyle.push(styles.large);

  return (
    <MUITypography
      align={align}
      component={as}
      className={typographyStyle.join(' ')}
      gutterBottom={gutterBottom}
      noWrap={noWrap}
      paragraph={paragraph}
    >
      {loading ? <Skeleton /> : children}
    </MUITypography>
  );
};

export default Typography;
