import MUIAccordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import { IcDropdown } from '@/components/icons';

import Typography from '../../base/Typography';

import type { AccordionsProps } from './index.types';

const Accordion = (props: AccordionsProps) => {
  const { label, children } = props;
  return (
    <MUIAccordion>
      <AccordionSummary
        expandIcon={<IcDropdown />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="title">{label}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </MUIAccordion>
  );
};

export default Accordion;
