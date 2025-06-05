'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';

type StepProps = {
  onNext: () => void;
  onBack?: () => void;
  onSubmit?: () => void;
};

type MultiStepFormProps = {
  getSteps: (handlers: {
    onNext: () => void;
    onBack: () => void;
    onSubmit: () => void;
  }) => React.ReactElement<StepProps>[];
};

export function MultiStepForm({ getSteps }: MultiStepFormProps) {
  const router = useRouter();
  const [step, setStep] = useState(0);

  const handleNext = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const handleBack = () => setStep((s) => Math.max(s - 1, 0));
  const handleSubmit = () => {
    router.push('/thanks');
  };

  const steps = getSteps({
    onNext: handleNext,
    onBack: handleBack,
    onSubmit: handleSubmit,
  });
  const CurrentStep = steps[step];

  return (
    <Card className='w-full max-w-xl bg-neutral-800 border border-white/20 shadow-md rounded-xl'>
      <CardHeader>
        <CardTitle className='text-white text-2xl'>Step {step + 1}</CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>{CurrentStep}</CardContent>
    </Card>
  );
}
