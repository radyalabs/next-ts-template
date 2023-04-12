import { InputUnstyled } from '@mui/base';

import type TextFieldProps from './index.types';

import styles from './index.module.scss';

const TextField = ({
  appendObject,
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
  const styleTextField = [styles.textfield];

  if (className) styleTextField.push(className);
  if (prependObject) styleTextField.push(styles.paddingSearch);
  if (error) styleTextField.push(styles.borderError);
  if (success) styleTextField.push(styles.borderSuccess);
  if (rounded) styleTextField.push(styles.rounded);
  if (disabled) styleTextField.push(styles.disabled);
  return (
    <div>
      {!!label && <label htmlFor={id} className="font-semibold mb-1 inline-block text-gray-500">{label}</label>}
      <InputUnstyled
        className="border border-gray-300 rounded-xl w-fit px-2"
        slotProps={{ input: { className: styleTextField.join(' '), id } }}
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
      />
    </div>
  );
};

export default TextField;
