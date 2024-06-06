import { forwardRef } from 'react';

import MUIAutocomplete from '@mui/material/Autocomplete';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import type { ForwardedRef } from 'react';

import Label from '@/components/base/Label';

import useAutocomplete from './index.hooks';
import type { AutocompleteProps } from './index.types';

import styles from './index.module.scss';

const Autocomplete = forwardRef(
  (props: AutocompleteProps, forwardedRef: ForwardedRef<HTMLInputElement>) => {
    const {
      block = false,
      classes,
      className,
      disabled = false,
      error = false,
      id,
      innerClassName,
      inputValue,
      label,
      labelLayout = 'vertical',
      message,
      multiple = false,
      options = [],
      placeholder = 'Enter text here',
      prependObject,
      required = false,
      rounded,
      size = 'medium',
      success = false,
      onBlur,
      onClick,
      onFocus,
      onKeyUp,
      value,
      isEqualToOption,
      onChange,
      onInputChange,
    } = props || {};

    const { defaultIsEqualToOption } = useAutocomplete();

    const {
      label: labelClass = '',
      input: inputClass = '',
      container: containerClass = '',
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

    const renderValue = () => {
      if (!value) {
        return null;
      }

      if (typeof value === 'string') {
        return {
          label: value,
          value,
        };
      }

      return value;
    };

    const renderedValue = renderValue();

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
        <div className={`${containerStyle.join(' ')} ${containerClass}`}>
          <MUIAutocomplete
            disablePortal
            value={renderedValue}
            isOptionEqualToValue={isEqualToOption || defaultIsEqualToOption}
            onChange={onChange}
            onInputChange={onInputChange}
            id={`${id}-autocomplete`}
            options={options}
            sx={{ width: 300 }}
            size={size}
            multiple={multiple}
            onBlur={onBlur}
            onClick={onClick}
            onFocus={onFocus}
            onKeyUp={onKeyUp}
            ref={forwardedRef}
            filterOptions={(x) => x}
            className={`${containerClass} w-full`}
            classes={{
              inputRoot: `${error && message ? 'border border-solid border-danger-500' : ''}`,
              listbox: 'max-h-[120px]',
            }}
            renderInput={
              (params) => (
                <TextField
                  {...params}
                  error={error}
                  className={`${textFieldStyle.join(' ')}`}
                  classes={{ root: 'p-0' }}
                  key={params.id}
                  placeholder={placeholder}
                  InputLabelProps={{ shrink: false }}
                  InputProps={{
                    ...params.InputProps,
                    className: `${inputClass} ${innerClassName} rounded-xl text-base py-1 flex flex-wrap bg-primary-500"`,
                  }}
                />
              )
            }
            renderOption={(params, option) => (
              <MenuItem
                {...params}
                className="text-base"
                key={option.value}
              >
                {option.label}
              </MenuItem>
            )}
            getOptionLabel={(params) => params.label}
            inputValue={inputValue}
            placeholder={placeholder}
            disabled={disabled}
            contentEditable={false}
          />
          {message && <FormHelperText error={error}>{message}</FormHelperText>}
        </div>
      </div>
    );
  },
);

export default Autocomplete;
