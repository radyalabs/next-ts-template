export interface StepperProps {
  activeStep: number;
  alternativeLabel: boolean;
  steps: StepArray[];
}

export interface StepArray {
  label:string
  optional:string
}
