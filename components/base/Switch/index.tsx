import React, { type ForwardedRef, forwardRef } from 'react';

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
              root: 'inline-block relative align-middle rounded-[34px] h-8',
              track: `absolute w-full h-full bg-[#ddd] transition-[background-color] duration-[0.3s]
  ease-[ease-in] rounded-[34px] left-0 top-0 after:content-[""] after:absolute after:-translate-y-2/4
  after:w-6 after:h-6 after:bg-transparent
  after:rounded-[50%] after:left-2 after:top-2/4 after: bg-primary-50`,
              thumb: 'w-6 h-6 duration-[0.3s] ease-[ease] rounded-[50%] left-0.5 top-[8px]',
              switchBase: 'absolute w-6 h-6 p-0 top-1 left-1',
              checked: 'translate-x-6',
            }}
          />
        </FormControl>
      </div>
    );
  },
);

export default Switch;
