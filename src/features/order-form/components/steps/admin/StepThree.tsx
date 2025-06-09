'use client';

import {
  FormLayout,
  FormFields,
  FormFooter,
  FormInputField,
} from '@/components/shared';
import { Button } from '@/components/ui';

import { NoteForSpecialOrder } from '../../NoteForSpecialOrder';
import { useStepNextHandler } from '../../../hooks/useStepNextHandler';

type StepThreeProps = {
  onNext: () => void;
  onBack: () => void;
};

export function StepThree({ onNext, onBack }: StepThreeProps) {
  const handleNext = useStepNextHandler(['orderId', 'discountCode'], onNext);

  return (
    <FormLayout>
      <FormFields>
        <FormInputField name='orderId' placeholder='Order ID' type='number' />
        <FormInputField
          name='discountCode'
          placeholder='Discount Code'
          type='number'
        />
      </FormFields>
      <NoteForSpecialOrder />
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
