import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import MUIStepper from '@mui/material/Stepper';

import Paper from '../../base/Paper';
import Typography from '../../base/Typography';

import type { StepperProps } from './index.types';

const Stepper = (props: StepperProps) => {
  const { activeStep, steps } = props;
  return (
    <Paper>
      <MUIStepper activeStep={activeStep} alternativeLabel>
        {steps.map((el) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          labelProps.optional = (
            <Typography variant="label">{el.optional}</Typography>
          );
          return (
            <Step key={el.label} {...stepProps}>
              <StepLabel {...labelProps}>{el.label}</StepLabel>
            </Step>
          );
        })}
      </MUIStepper>
    </Paper>
  );
};

export default Stepper;
