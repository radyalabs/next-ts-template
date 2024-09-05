import type { DatePickerProps } from '../DatePicker/index.types';

export type TimePickerProps = Omit<DatePickerProps, 'views'> & {
  showConfirmButtons?: boolean;
  views?: TimePickerView[];
  ampm?: boolean;
  ampmInClock?: boolean;
  clearable?: boolean;
};

export type TimePickerView = 'hours' | 'minutes' | 'seconds';
