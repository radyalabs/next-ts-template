import MUIButton from '@mui/material/Button';

import type ButtonProps from '@/components/base/Button/index.types';
import { Spinner } from '@/components/icons';

import styles from './index.module.scss';

const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    disabled = false,
    loading = false,
    rounded = false,
    size = 'medium',
    type = 'button',
    color = 'default',
    variant = 'default',
    onClick,
  } = props || {};
  const styleButton = [styles.button];

  if (className) styleButton.push(className);

  if (color === 'default') styleButton.push(styles.colorDefault);
  if (color === 'primary') styleButton.push(styles.colorPrimary);
  if (color === 'danger') styleButton.push(styles.colorDanger);

  if (variant === 'default') styleButton.push(styles.variantDefault);
  if (variant === 'outline') styleButton.push(styles.variantOutline);
  if (variant === 'dashed') styleButton.push(styles.variantDashed);
  if (variant === 'text') styleButton.push(styles.variantText);

  if (size === 'small') styleButton.push(styles.sizeSmall);
  if (size === 'medium') styleButton.push(styles.sizeMedium);
  if (size === 'large') styleButton.push(styles.sizeLarge);

  if (rounded) styleButton.push(styles.rounded);
  if (disabled) styleButton.push(styles.disabled);
  return (
    <MUIButton
      className={`inline-flex items-center justify-center gap-3 w-fit ${styleButton.join(' ')}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {loading && (
        <Spinner width="16px" height="16px" />
      ) }
      {children}
    </MUIButton>
  );
};

export default Button;
