import { forwardRef } from 'react';

import { TextareaAutosize } from '@mui/material/';
import type { ForwardedRef } from 'react';

import type TextareaProps from './index.types';

import styles from './index.module.scss';

const Textarea = forwardRef(
  (props: TextareaProps, forwardedRef: ForwardedRef<HTMLInputElement>) => {
    const {
      block = false,
      classes,
      className,
      disabled = false,
      error = false,
      id,
      innerClassName,
      label,
      maxRows = 4,
      message,
      minRows = 4,
      name,
      placeholder = 'Enter text here',
      required = false,
      rounded,
      success = false,
      value,
      onBlur,
      onChange,
      onClick,
      onFocus,
      onKeyUp,
    } = props || {};
    const {
      label: labelClass = '',
      container: containerClass = '',
      input: inputClass = '',
    } = classes || {};
    const textFieldStyle = [styles.textfield];
    const containerStyle = [styles.container];

    if (innerClassName) textFieldStyle.push(innerClassName);
    if (error) textFieldStyle.push(styles.borderError);
    if (success) textFieldStyle.push(styles.borderSuccess);
    if (rounded) textFieldStyle.push(styles.rounded);
    if (disabled) {
      textFieldStyle.push(styles.disabled);
    }
    if (block) {
      textFieldStyle.push(styles.block);
      containerStyle.push(styles.block);
    }
    return (
      <div className={className}>
        {!!label && (
          <label htmlFor={id} className={`font-semibold mb-1 block text-gray-500 ${labelClass}`}>{label}</label>
        )}
        <div className={`${containerStyle.join(' ')} ${containerClass} mt-3.5`}>
          <TextareaAutosize
            className={`${textFieldStyle.join(' ')} ${inputClass}`}
            placeholder={placeholder}
            value={value}
            required={required}
            onBlur={onBlur}
            onClick={onClick}
            onChange={onChange}
            onFocus={onFocus}
            disabled={disabled}
            ref={forwardedRef}
            name={name}
            onKeyUp={onKeyUp}
            minRows={minRows}
            maxRows={maxRows}
          />
        </div>
        <p className={`text-xs ml-2 mt-1 ${error ? 'text-danger-500' : ''}`}>{message}</p>
      </div>
    );
  },
);

export default Textarea;
