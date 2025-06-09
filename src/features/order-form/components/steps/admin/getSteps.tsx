'use client';

import type { ReactElement } from 'react';

import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';
import { StepThree } from './StepThree';
import { StepFour } from './StepFour';
import type { StepProps } from '../../../model/types/step';

type Handlers = {
  onNext: () => void;
  onBack: () => void;
  onSubmit: () => void;
};

export function getAdminSteps(handlers: Handlers): ReactElement<StepProps>[] {
  return [
    <StepOne key='step1' onNext={handlers.onNext} />,
    <StepTwo key='step2' onNext={handlers.onNext} onBack={handlers.onBack} />,
    <StepThree key='step3' onNext={handlers.onNext} onBack={handlers.onBack} />,
    <StepFour
      key='step4'
      onBack={handlers.onBack}
      onSubmit={handlers.onSubmit}
    />,
  ];
}
