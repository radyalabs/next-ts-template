import { forwardRef } from 'react';

import FormHelperText from '@mui/material/FormHelperText';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import type { ForwardedRef } from 'react';

import Label from '@/components/base/Label';

import type TextareaProps from './index.types';

import styles from './index.module.scss';

const Textarea = forwardRef(
  (props: TextareaProps, forwardedRef: ForwardedRef<HTMLTextAreaElement>) => {
    const {
      block = false,
      classes,
      className,
      disabled = false,
      error = false,
      id,
      innerClassName,
      label,
      labelLayout = 'vertical',
      maxRows = 4,
      message,
      minRows = 4,
      name,
      placeholder = '',
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
          <Label
            id={id}
            labelLayout={labelLayout}
            className={labelClass}
            required={required}
            value={label}
          />
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
        {message && <FormHelperText error={error}>{message}</FormHelperText>}
      </div>
    );
  },
);

export default Textarea;
