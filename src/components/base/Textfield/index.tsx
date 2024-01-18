import { forwardRef } from 'react';

import InputAdornment from '@mui/material/InputAdornment';
import MUITextField from '@mui/material/TextField';
import type { ForwardedRef } from 'react';

import Label from '@/components/base/Label';

import type { TextFieldProps } from './index.types';

import styles from './index.module.scss';

const TextField = forwardRef(
  (props: TextFieldProps, forwardedRef: ForwardedRef<HTMLInputElement>) => {
    const {
      appendObject,
      autoComplete,
      autoFocus = false,
      block = false,
      classes,
      className = '',
      disabled = false,
      error = false,
      id,
      inlineLabel,
      innerClassName,
      label,
      labelLayout = 'vertical',
      maxLength,
      message,
      name,
      placeholder,
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
      onKeyDown,
    } = props || {};
    const {
      label: labelClass = '',
      container: containerClass = '',
      input: inputClass = '',
    } = classes || {};
    const textFieldStyle = [styles.textfield];
    const containerStyle = [styles.container];

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
      <div
        className={`${className} ${
          labelLayout === 'horizontal' ? 'flex items-center' : 'flex flex-col gap-2'
        }`}
      >
        {!!label && (
          <Label
            id={id}
            labelLayout={labelLayout}
            className={labelClass}
            required={required}
            value={label}
          />
        )}
        <MUITextField
          autoComplete={autoComplete}
          aria-autocomplete="inline"
          autoFocus={autoFocus}
          className={`${containerStyle.join(' ')} ${containerClass} ${
            labelLayout === 'horizontal' && 'w-3/4'
          } my-0`}
          placeholder={placeholder}
          type={type}
          value={value}
          error={error}
          required={required}
          InputProps={{
            classes: { input: inputClass },
            className: `${textFieldStyle.join(
              ' ',
            )} ${innerClassName} rounded-xl`,
            startAdornment: (
              prependObject && <InputAdornment position="start" classes={{ root: '[&>*]:fill-n-7' }}>{prependObject}</InputAdornment>
            ),
            endAdornment: (
              appendObject && <InputAdornment position="end" classes={{ root: '[&>*]:fill-n-7' }}>{appendObject}</InputAdornment>
            ),
            inputProps: { maxLength, className: `py-3 px-3.5 ${!!prependObject && 'pl-0'} ${!!appendObject && 'pr-0'}` },
          }}
          InputLabelProps={{ shrink: !!value, className: 'text-base -my-1' }}
          label={inlineLabel}
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
          onKeyDown={onKeyDown}
          helperText={message}
        />
      </div>
    );
  },
);

export default TextField;
