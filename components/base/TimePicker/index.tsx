import { type ForwardedRef, forwardRef } from 'react';

import type { PickersActionBarAction } from '@mui/x-date-pickers';
import { TimePicker as MUITimePicker } from '@mui/x-date-pickers/TimePicker';

import Label from '@/components/base/Label';
import type { TimePickerProps } from '@/components/base/TimePicker/index.types';

import styles from '@/components/base/Textfield/index.module.scss';

const TimePicker = forwardRef(
  (props: TimePickerProps, forwardedRef: ForwardedRef<HTMLInputElement>) => {
    const {
      block = false,
      classes,
      className,
      clearable,
      disabled = false,
      disablePast = false,
      error = false,
      id,
      innerClassName,
      label,
      labelLayout = 'vertical',
      message,
      maxDate,
      minDate,
      name,
      placeholder = '',
      required = false,
      rounded,
      showConfirmButtons,
      size = 'medium',
      success = false,
      value,
      views = ['hours', 'minutes'],
      ampm = true,
      ampmInClock = true,
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

    const actions: PickersActionBarAction[] = [];
    if (clearable) actions.push('clear');
    if (showConfirmButtons) actions.push('cancel', 'accept');

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
        <MUITimePicker<Date>
          className={`${containerStyle.join(' ')} ${containerClass} ${
            labelLayout === 'horizontal' && 'w-3/4'
          } my-0`}
          disabled={disabled}
          disablePast={disablePast}
          onClose={onClose}
          onChange={(val) => {
            const invalid = val ? String(new Date(val)) === 'Invalid Date' : true;
            return onChange && onChange(val && !invalid ? new Date(val) : null);
          }}
          onOpen={onOpen}
          ref={forwardedRef}
          slotProps={{
            actionBar: { actions },
            desktopPaper: { classes: { root: 'font-sans' } },
            toolbar: {
              classes: {
                root: '[&>.MuiPickersToolbar-content]:justify-center [&>.MuiPickersToolbar-content]:items-center [&>.MuiTypography-root]:normal-case [&>.MuiTypography-root]:text-n-13',
                hourMinuteLabel: 'has-[.Mui-selected]:[&>button]:bg-primary-200 [&>span]:py-4 [&>span]:px-2 [&>button]:p-4 [&>button]:rounded-xl [&>button]:bg-n-4',
              },
            },
            layout: {
              classes: {
                contentWrapper: '[&>*>*>.MuiClock-clock]:bg-primary-200',
              },
            },
            textField: {
              error,
              helperText: message,
              margin: 'dense',
              name,
              placeholder,
              required,
              size,
              InputProps: {
                className: `${textFieldStyle.join(' ')}
                  ${inputClass} ${innerClassName} rounded-xl`,
              },
              inputProps: { className: 'pl-3.5 py-3 text-base' },
            },
          }}
          minTime={minDate}
          maxTime={maxDate}
          timezone="default"
          value={value}
          views={views}
          ampm={ampm}
          ampmInClock={ampmInClock}
        />
      </div>
    );
  },
);

export default TimePicker;
