import { forwardRef } from 'react';

import { DatePicker as MUIDatePicker } from '@mui/x-date-pickers/DatePicker';
import type { ForwardedRef } from 'react';

import type { DatePickerProps } from '@/components/base/DatePicker/index.types';
import Label from '@/components/base/Label';

import styles from '@/components/base/Textfield/index.module.scss';

const DatePicker = forwardRef(
  (props: DatePickerProps, forwardedRef: ForwardedRef<HTMLInputElement>) => {
    const {
      block = false,
      classes,
      className,
      disabled = false,
      disablePast = false,
      error = false,
      id,
      innerClassName,
      label,
      labelLayout = 'vertical',
      maxDate,
      message,
      minDate,
      name,
      placeholder = '',
      required = false,
      rounded,
      size = 'medium',
      success = false,
      value,
      views = ['year', 'month', 'day'],
      onClose,
      onChange,
      onOpen,
    } = props || {};
    const {
      label: labelClass = '',
      container: containerClass = '',
      input: inputClass = '',
    } = classes || {};
    const textFieldStyle = [styles.textfield];
    const containerStyle = [styles.container];

    if (innerClassName) textFieldStyle.push(innerClassName);
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
        <MUIDatePicker<Date>
          className={`${containerStyle.join(' ')} ${containerClass} ${
            labelLayout === 'horizontal' && 'w-3/4'
          } my-0`}
          disabled={disabled}
          disablePast={disablePast}
          maxDate={maxDate}
          minDate={minDate}
          onClose={onClose}
          onChange={onChange ? (val) => onChange(val) : undefined}
          onOpen={onOpen}
          ref={forwardedRef}
          slotProps={{
            actionBar: {
              actions: ['clear'],
            },
            desktopPaper: { classes: { root: 'font-sans' } },
            textField: {
              error,
              helperText: message,
              margin: 'dense',
              name,
              placeholder,
              required,
              size,
              InputProps: {
                className: `${textFieldStyle.join(
                  ' ',
                )} ${inputClass} ${innerClassName} rounded-xl`,
              },
              inputProps: { className: 'pl-3.5 py-3 text-base' },
            },
          }}
          value={value}
          views={views}
        />
      </div>
    );
  },
);

export default DatePicker;
