'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';

import type { StepProps, StepHandlers } from '../model/types/step';

type MultiStepFormProps = {
  getSteps: (handlers: StepHandlers) => React.ReactElement<StepProps>[];
};

export function MultiStepForm({ getSteps }: MultiStepFormProps) {
  const router = useRouter();
  const [step, setStep] = useState(0);

  const handleNext = () =>
    setStep((step) => Math.min(step + 1, steps.length - 1));
  const handleBack = () => setStep((step) => Math.max(step - 1, 0));
  const handleSubmit = () => {
    router.push('/thanks');
  };

  const steps = getSteps({
    onNext: handleNext,
    onBack: handleBack,
    onSubmit: handleSubmit,
  });

  if (!steps.length) {
    return (
      <Card className='w-full max-w-xl bg-neutral-800 border border-white/20 shadow-md rounded-xl'>
        <CardContent className='text-center text-white'>
          No steps available
        </CardContent>
      </Card>
    );
  }

  const CurrentStep = steps[step];

  return (
    <Card className='w-full max-w-xl bg-neutral-800 border border-white/20 shadow-md rounded-xl'>
      <CardHeader>
        <CardTitle className='text-white text-2xl'>
          Step {step + 1} of {steps.length}
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>{CurrentStep}</CardContent>
    </Card>
  );
}
