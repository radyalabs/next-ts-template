import { forwardRef } from 'react';

import type { ForwardedRef } from 'react';

import { IcChecklist } from '@/components/icons';

import type CheckboxProps from './index.types';

import styles from './index.module.scss';

const CheckboxLabel = forwardRef(
  (props: CheckboxProps, forwardedRef: ForwardedRef<HTMLInputElement>) => {
    const {
      classes,
      className = '',
      checked,
      error,
      id = crypto.randomUUID(),
      label,
      message,
      name,
      onChange,
      value,
    } = props || {};
    const {
      checkBox: checkBoxClass = '',
      label: labelClass = '',
    } = classes || {};

    return (
      <div className={`relative flex flex-wrap items-center ${className}`}>
        <input
          className={`peer ${[styles.checkbox].join(' ')} ${checkBoxClass}`}
          checked={checked}
          id={id}
          name={name}
          onChange={onChange}
          type="checkbox"
          ref={forwardedRef}
          value={value}
        />
        <label
          className={`${styles.label} ${labelClass}`}
          htmlFor={id}
        >
          {label}
        </label>
        {message && (
          <small
            className={`w-full py-2 pl-6 text-xs ${!error ? 'text-slate-400' : 'text-danger-500'} 
            transition peer-invalid:text-pink-500`}
          >
            <span>{message}</span>
          </small>
        )}
        <IcChecklist
          className="pointer-events-none absolute ml-1.5 mt-0.5 left-0 top-1
            h-4 w-4 -rotate-90 fill-white stroke-white opacity-0 transition-all
            duration-300 peer-checked:rotate-0 peer-checked:opacity-100
            peer-disabled:cursor-not-allowed"
        />
      </div>
    );
  },
);

export default CheckboxLabel;
