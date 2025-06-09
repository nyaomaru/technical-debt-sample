'use client';

import {
  FormLayout,
  FormFields,
  FormFooter,
  FormInputField,
} from '@/components/shared';
import { Button } from '@/components/ui';

import { useStepNextHandler } from '../../../hooks/useStepNextHandler';

type StepTwoProps = {
  onNext: () => void;
  onBack: () => void;
};

export function StepTwo({ onNext, onBack }: StepTwoProps) {
  const handleNext = useStepNextHandler(['phone'], onNext);

  return (
    <FormLayout>
      <FormFields>
        <FormInputField name='phone' placeholder='Phone' />
      </FormFields>
      <FormFooter align='between'>
        <Button variant='secondary' type='button' onClick={onBack}>
          Back
        </Button>
        <Button type='button' onClick={handleNext}>
          Next
        </Button>
      </FormFooter>
    </FormLayout>
  );
}
