import { type ForwardedRef, forwardRef } from 'react';

import type ButtonProps from '@/components/base/Button/index.types';
import Spinner from '@/components/base/Spinner';

import styles from './index.module.scss';

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
    onMouseEnter,
    onMouseLeave,
  } = props || {};
  const styleButton = [styles.button];

  if (className) styleButton.push(className);

  if (color === 'default') styleButton.push(styles.colorDefault);
  if (color === 'primary') styleButton.push(styles.colorPrimary);
  if (color === 'secondary') styleButton.push(styles.colorSecondary);
  if (color === 'danger') styleButton.push(styles.colorDanger);
  if (color === 'warning') styleButton.push(styles.colorWarning);
  if (color === 'success') styleButton.push(styles.colorSuccess);

  if (variant === 'default') styleButton.push(styles.variantDefault);
  if (variant !== 'default') styleButton.push(styles.variantOutline);
  if (variant === 'dashed') styleButton.push(styles.variantDashed);
  if (variant === 'text') styleButton.push(styles.variantText);

  if (size === 'small') styleButton.push(styles.sizeSmall);
  if (size === 'medium') styleButton.push(styles.sizeMedium);
  if (size === 'large') styleButton.push(styles.sizeLarge);

  if (rounded) styleButton.push(styles.rounded);
  if (disabled) {
    styleButton.push(styles.disabled);
  }

  return (
    <button
      className={`${styleButton.join(' ')} ${className} ${loading ? 'pointer-events-none' : ''}`}
      type={type}
      onClick={onClick}
      ref={forwardedRef}
      disabled={disabled}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {startIcon && (
        <span className={styles.icon}>
          {startIcon}
        </span>
      )}
      {children}
      {endIcon && (
        <span className={styles.icon}>
          {endIcon}
        </span>
      )}
      {loading && (
        <Spinner width="16px" height="16px" />
      )}
    </button>
  );
});

export default Button;
