'use client';

import type { ReactElement } from 'react';

import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';
import { StepThree } from './StepThree';
import type { StepProps } from '../../../model/types/step';

type Handlers = {
  onNext: () => void;
  onBack: () => void;
  onSubmit: () => void;
};

export function getNormalSteps(handlers: Handlers): ReactElement<StepProps>[] {
  return [
    <StepOne key='step1' onNext={handlers.onNext} />,
    <StepTwo key='step2' onNext={handlers.onNext} onBack={handlers.onBack} />,
    <StepThree
      key='step3'
      onBack={handlers.onBack}
      onSubmit={handlers.onSubmit}
    />,
  ];
}
