import { forwardRef } from 'react';

import MUITooltip from '@mui/material/Tooltip';
import type { ForwardedRef } from 'react';

import type { TooltipProps } from './index.types';

const Tooltip = forwardRef((props: TooltipProps, forwardedRef: ForwardedRef<Element>) => {
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
      classes={{ tooltip: 'font-sans' }}
      className={className}
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      disableFocusListener={disableFocus}
      disableHoverListener={disableHover}
      placement={placement}
      ref={forwardedRef}
    >
      { children }
    </MUITooltip>
  );
});

export default Tooltip;
