import MUIAccordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import { IcDropdown } from '@/components/icons';

import Typography from '../../base/Typography';

import type { AccordionsProps } from './index.types';

const Accordion = (props: AccordionsProps) => {
  const {
    children,
    className = '',
    defaultExpanded = false,
    label,
  } = props;
  return (
    <MUIAccordion
      className={`border border-solid border-n-5 rounded-xl drop-shadow-none shadow-none ${className}`}
      defaultExpanded={defaultExpanded}
    >
      <AccordionSummary expandIcon={<IcDropdown />}>
        <Typography variant="title">{label}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </MUIAccordion>
  );
};

export default Accordion;
