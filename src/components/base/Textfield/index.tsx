import { forwardRef } from 'react';

import { TextField as MUITextField } from '@mui/material';
import type { ForwardedRef } from 'react';

import type TextFieldProps from './index.types';

import styles from './index.module.scss';

const TextField = forwardRef(
  (props: TextFieldProps, forwardedRef: ForwardedRef<HTMLInputElement>) => {
    const {
      appendObject,
      block = false,
      className,
      disabled = false,
      error = false,
      id,
      innerClassName,
      label,
      message,
      name,
      placeholder = 'Enter text here',
      prependObject,
      required = false,
      rounded,
      size = 'medium',
      success = false,
      type = 'text',
      value,
      onBlur,
      onChange,
      onClick,
      onFocus,
      onKeyUp,
    } = props || {};
    const textFieldStyle = [styles.textfield];
    const containerStyle = [styles.container];

    if (className) containerStyle.push(className);
    if (innerClassName) textFieldStyle.push(innerClassName);
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
      <>
        {!!label && (
          <label htmlFor={id} className="font-semibold mb-1 block text-gray-500">{label}</label>
        )}
        <MUITextField
          className={`${containerStyle.join(' ')}`}
          placeholder={placeholder}
          type={type}
          value={value}
          error={error}
          required={required}
          InputProps={{
            className: textFieldStyle.join(' '),
            startAdornment: prependObject,
            endAdornment: appendObject,
          }}
          margin="dense"
          size={size}
          onBlur={onBlur}
          onClick={onClick}
          onChange={onChange}
          onFocus={onFocus}
          disabled={disabled}
          ref={forwardedRef}
          name={name}
          onKeyUp={onKeyUp}
        />
        <p className={`text-xs ml-2 mt-1 ${error ? 'text-danger-500' : ''}`}>{message}</p>
      </>
    );
  },
);

export default TextField;
