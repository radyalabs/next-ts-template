export interface SelectItem {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export type RadioOption = SelectItem;
