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

function StepOne({ onNext }: StepOneProps) {
  const { control, trigger } = useFormContext();

  const handleNext = async () => {
    const valid = await trigger(['name', 'email']);
    if (valid) {
      onNext();
    }
  };

  return (
    <div className='space-y-4'>
      <FormField
        control={control}
        name='name'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input placeholder='Name' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name='email'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder='Email' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className='flex justify-end'>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </div>
  );
}

function StepTwo({ onNext, onBack }: StepTwoProps) {
  const { control, trigger } = useFormContext();

  const handleNext = async () => {
    const valid = await trigger(['phone']);
    if (valid) {
      onNext();
    }
  };

  return (
    <div className='space-y-4'>
      <FormField
        control={control}
        name='phone'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone</FormLabel>
            <FormControl>
              <Input placeholder='Phone' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className='flex justify-between'>
        <Button variant='secondary' onClick={onBack}>
          Back
        </Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </div>
  );
}

function StepThree({ onBack, onSubmit }: StepThreeProps) {
  const { control, handleSubmit, reset, watch } = useFormContext();

  const onValidSubmit = () => {
    const formData = watch();
    sessionStorage.setItem('orderData', JSON.stringify(formData));
    reset();
    onSubmit();
  };

  return (
    <form className='space-y-4' onSubmit={handleSubmit(onValidSubmit)}>
      <FormField
        control={control}
        name='orderId'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Order ID</FormLabel>
            <FormControl>
              <Input placeholder='Order ID' type='number' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name='discountCode'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Discount Code</FormLabel>
            <FormControl>
              <Input placeholder='Discount Code' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className='flex justify-between'>
        <Button variant='secondary' type='button' onClick={onBack}>
          Back
        </Button>
        <Button type='submit'>Submit</Button>
      </div>
      <div className='text-blue-600 text-xs'>
        特別注文の割引コードが適用されます
      </div>
    </form>
  );
}

export function NoteForSpecialOrder() {
  return <div className='text-blue-600 text-xs mt-2'>※ 特別注文です</div>;
}

export function getSpecialSteps(handlers: {
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
