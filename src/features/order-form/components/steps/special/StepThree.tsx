'use client';

import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import {
  FormLayout,
  FormFields,
  FormFooter,
  FormInputField,
} from '@/components/shared';
import { Button } from '@/components/ui';

import { NoteForSpecialOrder } from '../../NoteForSpecialOrder';

type StepThreeProps = {
  onBack: () => void;
  onSubmit: () => void;
};

export function StepThree({ onBack, onSubmit }: StepThreeProps) {
  const { handleSubmit, reset, watch } = useFormContext();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onValidSubmit = async () => {
    try {
      setIsSubmitting(true);
      const formData = watch();
      sessionStorage.setItem('orderData', JSON.stringify(formData));
      reset();
      await onSubmit();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormLayout as='form' onSubmit={handleSubmit(onValidSubmit)}>
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
        <Button type='submit' disabled={isSubmitting}>
          {isSubmitting && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </FormFooter>
    </FormLayout>
  );
}
