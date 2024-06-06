import { forwardRef } from 'react';

import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import MUISelect from '@mui/material/Select';
import { ClearIcon } from '@mui/x-date-pickers';
import type { ForwardedRef } from 'react';

import Button from '@/components/base/Button';
import Label from '@/components/base/Label';
import TextField from '@/components/base/Textfield';
import { noop } from '@/utils';

import useSelect from './index.hooks';
import type { ModifiedSelectChangeEvent, SelectProps } from './index.types';

const Select = forwardRef(
  (props: SelectProps, forwardedRef: ForwardedRef<HTMLSelectElement>) => {
    const {
      block = false,
      classes,
      className,
      clearable = false,
      defaultValue,
      disabled = false,
      filteredOptions: propFilteredOptions,
      error = false,
      id,
      inputValue,
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
      onChange = noop,
      onClick = noop,
      onFocus = noop,
      onKeyUp = noop,
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
      onChangeSearchValue,
    } = useSelect(props);

    const optionDisplay = (propFilteredOptions || filteredOptions);

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
              className: `${selectStyle.join(' ')} ${inputClass} py-3`,
            }}
            onClose={handleClose}
            renderValue={(selected) => {
              const selectedOptions = options.find(
                (el) => el.value === selected,
              );
              if ((typeof selected === 'number' ? String(selected).length === 0 : selected.length === 0) && !selectedOptions) {
                return (
                  <span className="text-n-5">
                    {placeholder}
                  </span>
                );
              }
              if (!multiple) {
                if (selectedOptions) {
                  return selectedOptions.label;
                }
                if (!selectedOptions && inputValue) {
                  return inputValue;
                }
                return selected;
              }
              return (
                <div className="flex gap-1 flex-wrap">
                  {(selected as string[]).map((el, i) => {
                    const selectedMultipleOptions = options.find(
                      (opt) => String(opt.value) === el,
                    );
                    return (
                      <Chip
                        key={(selectedMultipleOptions && selectedMultipleOptions.value)}
                        label={(selectedMultipleOptions && selectedMultipleOptions.label)}
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
            onOpen={() => onChangeSearchValue('')}
            onClick={onClick}
            onChange={handleValueChange}
            onFocus={onFocus}
            disabled={disabled}
            ref={forwardedRef}
            name={name}
            onKeyUp={onKeyUp}
            MenuProps={{ classes: { paper: 'max-h-[240px]' } }}
            endAdornment={(!!value && clearable) && (
              <InputAdornment position="end" className="pr-4">
                <Button
                  className="p-1 bg-transparent hover:bg-n-4"
                  rounded
                  onClick={() => handleValueChange({ target: { value: '' }, name } as unknown as ModifiedSelectChangeEvent)}
                >
                  <ClearIcon className="[&>*]:fill-n-8 w-5 h-5" />
                </Button>
              </InputAdornment>
            )}
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
            {optionDisplay.length ? optionDisplay.map((option) => (
              <MenuItem
                value={option.value}
                classes={{ root: 'font-sans text-base' }}
                key={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </MenuItem>
            )) : (
              <MenuItem
                value=""
                classes={{ root: 'font-sans text-base' }}
                disabled
              >
                No Data
              </MenuItem>
            )}
          </MUISelect>
          {message && <FormHelperText error={error}>{message}</FormHelperText>}
        </FormControl>
      </div>
    );
  },
);

export default Select;
