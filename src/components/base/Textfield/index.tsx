import { InputUnstyled } from '@mui/base';

import type TextFieldProps from './index.types';

import styles from './index.module.scss';

const TextField = ({
  appendObject,
  block = false,
  className,
  disabled = false,
  error = false,
  id,
  label,
  password = false,
  placeholder = 'Enter text here',
  prependObject,
  required = false,
  rounded,
  success = false,
  value,
  onBlur,
  onChange,
  onClick,
  onFocus,
}: TextFieldProps) => {
  const textFieldStyle = [styles.textfield];
  const containerStyle = [styles.container];

  if (className) textFieldStyle.push(className);
  if (prependObject) textFieldStyle.push(styles.paddingSearch);
  if (error) containerStyle.push(styles.borderError);
  if (success) containerStyle.push(styles.borderSuccess);
  if (rounded) containerStyle.push(styles.rounded);
  if (disabled) {
    textFieldStyle.push(styles.disabled);
    containerStyle.push(styles.disabled);
  }
  if (block) {
    textFieldStyle.push(styles.block);
    containerStyle.push(styles.block);
  }
  return (
    <div className="block">
      {!!label && <label htmlFor={id} className="font-semibold mb-1 block text-gray-500">{label}</label>}
      <InputUnstyled
        className={containerStyle.join(' ')}
        slotProps={{ input: { className: textFieldStyle.join(' '), id } }}
        placeholder={placeholder}
        type={password ? 'password' : 'text'}
        value={value}
        error={error}
        required={required}
        startAdornment={prependObject}
        endAdornment={appendObject}
        onBlur={onBlur}
        onClick={onClick}
        onChange={onChange}
        onFocus={onFocus}
        disabled={disabled}
      />
    </div>
  );
};

export default TextField;
