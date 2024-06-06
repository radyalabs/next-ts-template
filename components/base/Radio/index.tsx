import { forwardRef } from 'react';

import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import MUIRadio from '@mui/material/Radio';
import MUIRadioGroup from '@mui/material/RadioGroup';
import type { ForwardedRef } from 'react';

import Label from '@/components/base/Label';

import type { RadioProps } from './index.types';

const Radio = forwardRef((props: RadioProps, forwardedRef: ForwardedRef<HTMLInputElement>) => {
  const {
    classes,
    className = '',
    defaultValue,
    direction = 'horizontal',
    error = false,
    id = 'radio1',
    label,
    labelLayout = 'vertical',
    message = '',
    name,
    onChange,
    checkedValue,
    options = [],
    required = false,
    value,
  } = props;
  const {
    container: containerClass = '',
    label: labelClass = '',
    input: inputClass = '',
  } = classes || {};

  return (
    <div
      className={`${
        labelLayout === 'horizontal' && 'flex items-center'
      } ${className}`}
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
      <FormControl className={`${labelLayout === 'horizontal' && 'w-3/4'}`}>
        <MUIRadioGroup
          name={name}
          className={containerClass}
          aria-labelledby={id}
          row={direction === 'horizontal'}
          onChange={onChange}
          defaultValue={defaultValue}
          ref={forwardedRef}
          value={value}
        >
          {options.map((option) => (
            <FormControlLabel
              className={inputClass}
              classes={{ label: 'text-base' }}
              key={option.value}
              value={option.value}
              control={<MUIRadio />}
              label={option.label}
              checked={option.value === checkedValue}
            />
          ))}
        </MUIRadioGroup>
        {message && <FormHelperText error={error}>{message}</FormHelperText>}
      </FormControl>
    </div>
  );
});

export default Radio;
