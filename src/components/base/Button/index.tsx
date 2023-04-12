import { ButtonUnstyled } from '@mui/base';

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

  if (size === 'small') styleButton.push(styles.sizeSmall);
  if (size === 'medium') styleButton.push(styles.sizeMedium);
  if (size === 'large') styleButton.push(styles.sizeLarge);

  if (rounded) styleButton.push(styles.rounded);
  if (disabled) styleButton.push(styles.disabled);
  return (
    <ButtonUnstyled
      className={`inline-flex items-center justify-around ${styleButton.join(' ')}`}
      disabled={disabled}
      onClick={onClick}
    >
      {loading && (
        <>
          <Spinner width="16px" height="16px" />
          &nbsp;
        </>
      ) }
      {children}
    </ButtonUnstyled>
  );
};

export default Button;
