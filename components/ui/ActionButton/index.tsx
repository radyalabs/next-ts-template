import Button from '@/components/base/Button';

import type ActionButtonProps from './index.types';

import styles from './index.module.scss';

const ActionButton = (props: ActionButtonProps) => {
  const {
    children,
    className,
    disabled = false,
    color = 'default',
    onClick,
    startIcon,
    endIcon,
  } = props || {};
  const styleButton = [styles.button];

  if (className) styleButton.push(className);

  if (color === 'default') styleButton.push(styles.colorDefault);
  if (color === 'primary') styleButton.push(styles.colorPrimary);
  if (color === 'success') styleButton.push(styles.colorSuccess);
  if (color === 'danger') styleButton.push(styles.colorDanger);
  if (color === 'warning') styleButton.push(styles.colorWarning);
  if (disabled) styleButton.push(styles.colorDisabled);
  return (

    <Button
      size="small"
      className={`p-1 border-0 rounded-md
        disabled:bg-gray-300 [&>*]:disabled:fill-n-6
        inline-flex items-center ${styleButton.join(' ')}`}
      onClick={onClick}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {children}
    </Button>
  );
};

export default ActionButton;
