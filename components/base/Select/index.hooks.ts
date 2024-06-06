import { type ChangeEvent, useEffect, useState } from 'react';

import { noop } from '@/utils';

import type { ModifiedSelectChangeEvent, SelectProps } from './index.types';

import styles from './index.module.scss';

const useSelect = (props: SelectProps) => {
  const {
    block,
    disabled,
    error,
    innerClassName,
    options = [],
    prependObject,
    success = false,
    rounded,
    onChange,
    onChangeSearchValue = noop,
  } = props;
  const selectStyle = [styles.select];
  const containerStyle = [styles.container];

  if (innerClassName) selectStyle.push(innerClassName);
  if (prependObject) selectStyle.push(styles.paddingSearch);
  if (error) containerStyle.push(styles.borderError);
  if (success) containerStyle.push(styles.borderSuccess);
  if (rounded) containerStyle.push(styles.rounded);
  if (disabled) {
    selectStyle.push(styles.disabled);
    containerStyle.push(styles.disabled);
  }
  if (block) {
    selectStyle.push(styles.block);
    containerStyle.push(styles.block);
  }

  const [searchValue, setSearchValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([...options]);

  useEffect(() => {
    setFilteredOptions([...options]);
  }, [options]);

  const resetOptions = () => {
    setFilteredOptions([...options]);
  };

  const handleChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { target: { value: searchString } } = e;
    setSearchValue(searchString);
    setFilteredOptions(options.filter((el) => (
      el.label.toLowerCase().includes(searchString.toLowerCase())
    )));
    onChangeSearchValue(searchString);
  };

  const handleClose = () => {
    resetOptions();
  };

  const handleValueChange = (event: ModifiedSelectChangeEvent) => {
    resetOptions();
    if (onChange) {
      onChange(event);
    }
  };

  return {
    containerStyle,
    filteredOptions,
    searchValue,
    selectStyle,
    handleChangeSearchValue,
    handleClose,
    handleValueChange,
    onChangeSearchValue,
  };
};

export default useSelect;
