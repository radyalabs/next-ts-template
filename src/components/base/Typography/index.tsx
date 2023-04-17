import { Typography as MUITypography } from '@mui/material';

import type { TypographyProps } from './index.types';

const Typography = (props: TypographyProps) => {
  const {
    align = 'inherit',
    as = 'p',
    children,
    className,
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    variant = 'inherit',
  } = props;
  return (
    <MUITypography
      align={align}
      component={as}
      className={className}
      gutterBottom={gutterBottom}
      noWrap={noWrap}
      paragraph={paragraph}
      variant={variant}
    >
      {children}
    </MUITypography>
  );
};

export default Typography;
