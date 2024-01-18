import { forwardRef } from 'react';

import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import MUISelect from '@mui/material/Select';
import type { ForwardedRef } from 'react';

import Label from '@/components/base/Label';
import TextField from '@/components/base/Textfield';

import useSelect from './index.hooks';
import type { SelectProps } from './index.types';

const Select = forwardRef(
  (props: SelectProps, forwardedRef: ForwardedRef<HTMLSelectElement>) => {
    const {
      block = false,
      classes,
      className,
      defaultValue,
      disabled = false,
      error = false,
      id,
      label,
      labelLayout = 'vertical',
      message,
      multiple = false,
      name,
      options = [],
      placeholder = '',
      required = false,
      showSearch = false,
      size = 'small',
      type = 'text',
      value = '',
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

    const {
      containerStyle,
      filteredOptions,
      searchValue,
      selectStyle,
      handleChangeSearchValue,
      handleClose,
      handleValueChange,
    } = useSelect(props);

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
        <FormControl className={`${labelLayout === 'horizontal' && 'w-3/4'} ${block && 'block'}`}>
          <MUISelect<string | string[] | number>
            className={`${containerStyle.join(' ')} ${containerClass} rounded-xl`}
            classes={{ select: 'font-sans w-full' }}
            defaultValue={multiple ? defaultValue || [] : defaultValue}
            type={type}
            value={value}
            error={error}
            required={required}
            SelectDisplayProps={{
              className: `${selectStyle.join(' ')} ${inputClass}`,
            }}
            onClose={handleClose}
            renderValue={(selected) => {
              if (typeof selected === 'number' ? String(selected).length === 0 : selected.length === 0) {
                return (
                  <span className="text-n-5">
                    {placeholder}
                  </span>
                );
              }
              if (!multiple) {
                const selectedOptions = options.find(
                  (el) => String(el.value) === selected,
                );
                return (selectedOptions && selectedOptions.label) || selected;
              }
              return (
                <div className="flex gap-1">
                  {(selected as string[]).map((el, i) => {
                    const selectedOptions = options.find(
                      (opt) => String(opt.value) === el,
                    );
                    return (
                      <Chip
                        key={(selectedOptions && selectedOptions.value)}
                        label={(selectedOptions && selectedOptions.label)}
                        onMouseDown={(event) => event.stopPropagation()}
                        onDelete={(e) => {
                          (selected as string[]).splice(i, 1);
                          if (onChange) {
                            onChange({ ...e, target: { value: selected } });
                          }
                        }}
                      />
                    );
                  })}
                </div>
              );
            }}
            displayEmpty
            margin="dense"
            multiple={multiple}
            size={size}
            onBlur={onBlur}
            onClick={onClick}
            onChange={handleValueChange}
            onFocus={onFocus}
            disabled={disabled}
            ref={forwardedRef}
            name={name}
            onKeyUp={onKeyUp}
            MenuProps={{ classes: { paper: 'max-h-[240px]' } }}
          >
            {showSearch && (
              <TextField
                block
                className="mx-4"
                value={searchValue}
                onChange={handleChangeSearchValue}
                onKeyDown={(e) => {
                  e.stopPropagation();
                }}
              />
            )}
            {filteredOptions.map((option) => (
              <MenuItem
                value={option.value}
                classes={{ root: 'font-sans text-base' }}
                key={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </MUISelect>
          {message && <FormHelperText error={error}>{message}</FormHelperText>}
        </FormControl>
      </div>
    );
  },
);

export default Select;
