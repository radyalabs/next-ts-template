import { forwardRef } from 'react';

import MUIButton from '@mui/material/Button';
import type { ForwardedRef } from 'react';

import type ButtonProps from '@/components/base/Button/index.types';
import Spinner from '@/components/base/Spinner';
import { noop } from '@/utils';

import styles from './index.module.scss';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    default: true;
    danger: true;
  }
}

const Button = forwardRef((props: ButtonProps, forwardedRef: ForwardedRef<HTMLButtonElement>) => {
  const {
    children,
    className,
    disabled = false,
    endIcon,
    loading = false,
    rounded = false,
    size = 'medium',
    startIcon,
    type = 'button',
    color = 'default',
    variant = 'default',
    onClick,
  } = props || {};
  const styleButton = [styles.button];
  const iconStyle = [styles.iconDefault];

  if (className) styleButton.push(className);

  if (color === 'default') styleButton.push(styles.colorDefault);
  if (color === 'primary') styleButton.push(styles.colorPrimary);
  if (color === 'secondary') {
    styleButton.push(styles.colorSecondary);
    iconStyle.push(styles.iconPrimary);
  }
  if (color === 'danger') styleButton.push(styles.colorDanger);

  if (variant === 'default') styleButton.push(styles.variantDefault);
  if (variant === 'outline') {
    styleButton.push(styles.variantOutline);
    iconStyle.push(styles.iconPrimary);
    if (color === 'danger') iconStyle.push(styles.iconDanger);
  }
  if (variant === 'dashed') styleButton.push(styles.variantDashed);
  if (variant === 'text') {
    styleButton.push(styles.variantText);
    if (color === 'default') iconStyle.push(styles.iconSlate);
    if (color === 'primary') iconStyle.push(styles.iconPrimary);
    if (color === 'danger') iconStyle.push(styles.iconDanger);
  }

  if (size === 'small') styleButton.push(styles.sizeSmall);
  if (size === 'medium') styleButton.push(styles.sizeMedium);
  if (size === 'large') styleButton.push(styles.sizeLarge);

  if (rounded) styleButton.push(styles.rounded);
  if (disabled) {
    styleButton.push(styles.disabled);
    iconStyle.push(styles.iconDisabled);
  }

  return (
    <MUIButton
      className={`items-center justify-center min-w-fit ${styleButton.join(' ')}`}
      color={color}
      variant="contained"
      disableElevation
      classes={{ startIcon: iconStyle.join(' ') }}
      disabled={disabled}
      onClick={!loading ? onClick : noop}
      type={type}
      endIcon={endIcon}
      startIcon={!loading ? startIcon : <Spinner width="24px" height="24px" />}
      disableRipple={variant === 'text'}
      ref={forwardedRef}
    >
      {children}
    </MUIButton>
  );
});

export default Button;
