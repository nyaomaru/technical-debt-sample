'use client';

import {
  FormLayout,
  FormFields,
  FormFooter,
  FormInputField,
} from '@/components/shared';
import { Button } from '@/components/ui';

import { useStepNextHandler } from '../../../hooks/useStepNextHandler';

type StepOneProps = {
  onNext: () => void;
};

export function StepOne({ onNext }: StepOneProps) {
  const handleNext = useStepNextHandler(['name', 'email'], onNext);

  return (
    <FormLayout>
      <FormFields>
        <FormInputField name='name' placeholder='Name' />
        <FormInputField name='email' placeholder='Email' />
      </FormFields>
      <FormFooter align='end'>
        <Button type='button' onClick={handleNext}>
          Next
        </Button>
      </FormFooter>
    </FormLayout>
  );
}
