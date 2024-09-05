import MUIChip from '@mui/material/Chip';

import type { ChipProps } from './index.types';

const Chip = (props: ChipProps) => {
  const {
    className = '',
    color = 'default',
    label = '',
  } = props;
  return (
    <MUIChip
      color={color}
      label={label}
      classes={{
        root: `rounded-lg text-sm font-semibold min-w-[6rem] ${className}`,
        colorSuccess: 'bg-success-500 text-n-1',
        colorInfo: 'bg-[#a7a7a7] text-n-10',
      }}
    />
  );
};

export default Chip;
