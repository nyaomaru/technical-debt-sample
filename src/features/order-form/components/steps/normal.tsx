'use client';

import { Input, Button } from '@/components/ui';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { useFormContext } from 'react-hook-form';

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

function FormInputField({
  name,
  placeholder,
  type = 'text',
}: {
  name: string;
  placeholder: string;
  type?: string;
}) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{placeholder}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              type={type}
              {...field}
              onChange={(e) =>
                type === 'number'
                  ? field.onChange(e.target.valueAsNumber)
                  : field.onChange(e.target.value)
              }
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function StepOne({ onNext }: StepOneProps) {
  const { trigger } = useFormContext();

  const handleNext = async () => {
    const valid = await trigger(['name', 'email']);
    if (valid) {
      onNext();
    }
  };

  return (
    <div className='flex-1 flex flex-col justify-between'>
      <div className='flex-grow space-y-4'>
        <FormInputField name='name' placeholder='Name' />
        <FormInputField name='email' placeholder='Email' />
      </div>
      <div className='flex-grow' />
      <div className='mt-4 flex justify-end'>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </div>
  );
}

function StepTwo({ onNext, onBack }: StepTwoProps) {
  const { trigger } = useFormContext();

  const handleNext = async () => {
    const valid = await trigger('phone');
    if (valid) {
      onNext();
    }
  };

  return (
    <div className='flex-1 flex flex-col justify-between'>
      <div className='space-y-4'>
        <FormInputField name='phone' placeholder='Phone' />
      </div>
      <div className='flex-grow' />
      <div className='mt-4 flex justify-between'>
        <Button variant='secondary' type='button' onClick={onBack}>
          Back
        </Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </div>
  );
}

function StepThree({ onBack, onSubmit }: StepThreeProps) {
  const { handleSubmit, reset, watch } = useFormContext();

  const onValidSubmit = () => {
    const formData = watch();
    sessionStorage.setItem('orderData', JSON.stringify(formData));
    reset();
    onSubmit();
  };

  return (
    <form
      className='flex-1 flex flex-col justify-between'
      onSubmit={handleSubmit(onValidSubmit)}
    >
      <div className='flex-grow space-y-4'>
        <FormInputField name='orderId' placeholder='Order ID' type='number' />
      </div>
      <div className='mt-4 flex justify-between'>
        <Button variant='secondary' type='button' onClick={onBack}>
          Back
        </Button>
        <Button type='submit'>Submit</Button>
      </div>
    </form>
  );
}

export function getNormalSteps(handlers: {
  onNext: () => void;
  onBack: () => void;
  onSubmit: () => void;
}) {
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
