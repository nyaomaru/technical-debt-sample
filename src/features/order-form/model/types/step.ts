export type StepProps = Partial<StepHandlers>;

export type StepHandlers = {
  /** Called when the current step is successfully validated and the user proceeds to the next step */
  onNext: () => void;
  /** Called when the user navigates back to the previous step */
  onBack: () => void;
  /** Called when the user completes the final step and submits the form */
  onSubmit: () => void;
};
