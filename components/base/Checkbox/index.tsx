import { forwardRef } from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import type { ForwardedRef } from 'react';

import type CheckboxProps from './index.types';

import styles from './index.module.scss';

const CheckboxLabel = forwardRef(
  (props: CheckboxProps, forwardedRef: ForwardedRef<HTMLButtonElement>) => {
    const {
      classes,
      className,
      checked,
      error,
      id,
      label,
      message,
      name,
      box = false,
      onChange,
      value,
    } = props || {};
    const {
      checkBox: checkBoxClass = '',
      label: labelClass = '',
    } = classes || {};

    const styleCheckbox = [styles.button];

    if (className) styleCheckbox.push(className);

    if (box) {
      styleCheckbox.push(styles.box);
    }

    return (
      <div className="font-bold w-fit">
        <FormControlLabel
          className={`p-0 m-0 ${styleCheckbox.join(' ')}`}
          control={(
            <Checkbox
              id={id}
              ref={forwardedRef}
              className={`${checkBoxClass}`}
              checked={checked}
              onChange={onChange}
              name={name}
              value={value}
            />
          )}
          label={<span className={`${labelClass} text-base`}>{label}</span>}
        />
        {message && <FormHelperText error={error}>{message}</FormHelperText>}
      </div>
    );
  },
);

export default CheckboxLabel;
