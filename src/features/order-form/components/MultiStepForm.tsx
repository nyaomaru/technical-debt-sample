'use client';

import React, { useState } from 'react';

type StepProps = {
  onNext: () => void;
  onBack?: () => void;
};

type MultiStepFormProps = {
  steps: React.ReactElement<StepProps>[];
};

export function MultiStepForm({ steps }: MultiStepFormProps) {
  const [step, setStep] = useState(0);

  const CurrentStep = steps[step];

  const handleNext = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const handleBack = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <>
      {CurrentStep && CurrentStep.props
        ? React.cloneElement(CurrentStep, {
            onNext: handleNext,
            onBack: handleBack,
          })
        : null}
    </>
  );
}
