import { Tooltip as MUITooltip } from '@mui/material';

import type { TooltipProps } from './index.types';

const Tooltip = (props: TooltipProps) => {
  const {
    children,
    className = '',
    disableFocus = false,
    disableHover = false,
    open,
    placement = 'top',
    title = '',
    onClose,
    onOpen,
  } = props;
  return (
    <MUITooltip
      arrow
      title={title}
      className={className}
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      disableFocusListener={disableFocus}
      disableHoverListener={disableHover}
      placement={placement}
    >
      { children }
    </MUITooltip>
  );
};

export default Tooltip;
