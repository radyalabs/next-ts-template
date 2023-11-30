import type { AutocompleteChangeReason, AutocompleteInputChangeReason } from '@mui/material';
import type { Dispatch, SetStateAction, SyntheticEvent } from 'react';

import type { SelectItem } from '@/types/inputs';

import type { TextFieldProps } from '../Textfield/index.types';

export interface AutocompleteProps extends Omit<TextFieldProps, 'onChange' | 'value'> {
  // Option-related properties
  options?: SelectItem[];
  getOptionLabelAutocomplete?: (option: SelectItem) => string;
  isEqualToOption?: (option: SelectItem, selectedValue: SelectItem) => boolean;

  // Input-related properties
  inputValue?: string | undefined;
  setInputValue?: Dispatch<SetStateAction<string | undefined>>;
  inputLabel?: string;

  // Editable status
  contentEditable?: boolean;

  // Event handlers
  onChange?: (
    event: SyntheticEvent<Element, Event>,
    value: SelectItem | null,
    reason: AutocompleteChangeReason,
  ) => void;

  onInputChange?: (
    event: SyntheticEvent<Element, Event>,
    value: string,
    reason: AutocompleteInputChangeReason
  ) => void;

  setValue?: Dispatch<SetStateAction<string | number | undefined>>;
  value?: string | SelectItem | null;
}
