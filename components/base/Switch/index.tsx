import { type ForwardedRef, forwardRef } from 'react';

import FormControl from '@mui/material/FormControl';
import MUISwitch from '@mui/material/Switch';

import Label from '@/components/base/Label';

import type { SwitchProps } from './index.types';

const Switch = forwardRef(
  (props: SwitchProps, forwardedRef: ForwardedRef<HTMLButtonElement>) => {
    const {
      className,
      defaultChecked = false,
      checked = false,
      onChange,
      id,
      label,
      labelLayout = 'vertical',
      message = '',
      name,
      required = false,
      block = false,
    } = props || {};

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
            required={required}
            value={label}
          />
        )}
        <FormControl className={`${labelLayout === 'horizontal' && 'w-3/4'} ${block && 'block'}`}>
          <MUISwitch
            ref={forwardedRef}
            defaultChecked={defaultChecked}
            checked={checked}
            onChange={onChange}
            id={id}
            disabled={!!message}
            name={name}
            classes={{
              root: 'inline-block relative align-middle rounded-2xl h-7 w-14',
              track: `absolute w-full h-full rounded-2xl left-0 top-0 ${checked ? 'bg-primary-100' : 'bg-n-5'}`,
              thumb: `w-5 h-5 ${checked ? 'bg-primary-500' : 'bg-n-7'}`,
              switchBase: 'absolute w-5 h-5 p-0 top-1 left-1',
              checked: 'translate-x-7 bg-primary-100',
            }}
          />
        </FormControl>
      </div>
    );
  },
);

export default Switch;
