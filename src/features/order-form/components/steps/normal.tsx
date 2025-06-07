'use client';

import { useState, type ReactElement } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui';
import { useFormContext } from 'react-hook-form';
import { FormLayout } from '@/components/shared/form-layout';
import { FormFields } from '@/components/shared/form-fields';
import { FormFooter } from '@/components/shared/form-footer';
import { FormInputField } from '@/components/shared/form-input-field';
import { useNextHandler } from '../../hooks/use-next-handler';
import type { StepProps } from '../../model/step';

type StepOneProps = {
  onNext: () => void;
};

type StepTwoProps = {
  onNext: () => void;
  onBack: () => void;
};

type StepThreeProps = {
  onBack: () => void;
  onSubmit: () => void;
};

function StepOne({ onNext }: StepOneProps) {
  const handleNext = useNextHandler(['name', 'email'], onNext);

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

function StepTwo({ onNext, onBack }: StepTwoProps) {
  const handleNext = useNextHandler(['phone'], onNext);

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

function StepThree({ onBack, onSubmit }: StepThreeProps) {
  const { handleSubmit, reset, watch } = useFormContext();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onValidSubmit = () => {
    setIsSubmitting(true);
    const formData = watch();
    sessionStorage.setItem('orderData', JSON.stringify(formData));
    reset();
    onSubmit();
  };

  return (
    <FormLayout as='form' onSubmit={handleSubmit(onValidSubmit)}>
      <FormFields>
        <FormInputField name='orderId' placeholder='Order ID' type='number' />
      </FormFields>
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
