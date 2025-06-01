'use client';

import { Button, Input } from '@/components/ui';
import { useFormContext } from '../../model/FormContextProvider';
import { normalOrderSchema } from '../../model/validations';
import { useState } from 'react';
import { ZodError } from 'zod';

type StepOneProps = {
  onNext: () => void;
};

type StepTwoProps = {
  onNext: () => void;
  onBack: () => void;
};

type StepThreeProps = {
  onBack: () => void;
  isSpecial: boolean;
};

function StepOne({ onNext }: StepOneProps) {
  const { formData, setFormData } = useFormContext();
  const [error, setError] = useState<string | null>(null);

  const handleNext = () => {
    try {
      normalOrderSchema.pick({ name: true, email: true }).parse(formData);
      setError(null);
      onNext();
    } catch (e: unknown) {
      if (e instanceof ZodError) {
        setError(e.errors?.[0]?.message || '入力エラー');
      } else {
        setError('Unknown error');
      }
    }
  };

  return (
    <div className='space-y-4'>
      <Input
        placeholder='Name'
        value={formData.customerName || ''}
        onChange={(e) => setFormData({ customerName: e.target.value })}
      />
      <Input
        placeholder='Email'
        value={formData.email || ''}
        onChange={(e) => setFormData({ email: e.target.value })}
      />
      {error && <div className='text-red-500 text-sm'>{error}</div>}
      <Button onClick={handleNext}>Next</Button>
    </div>
  );
}

function StepTwo({ onNext, onBack }: StepTwoProps) {
  const { formData, setFormData } = useFormContext();
  const [error, setError] = useState<string | null>(null);

  const handleNext = () => {
    try {
      normalOrderSchema.pick({ phone: true }).parse(formData);
      setError(null);
      onNext();
    } catch (e: unknown) {
      if (e instanceof ZodError) {
        setError(e.errors?.[0]?.message || '入力エラー');
      } else {
        setError('Unknown error');
      }
    }
  };

  return (
    <div className='space-y-4'>
      <Input
        placeholder='Phone'
        value={formData.phone || ''}
        onChange={(e) => setFormData({ phone: e.target.value })}
      />
      {error && <div className='text-red-500 text-sm'>{error}</div>}
      <div className='flex gap-2'>
        <Button variant='secondary' onClick={onBack}>
          Back
        </Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </div>
  );
}

function StepThree({ onBack, isSpecial }: StepThreeProps) {
  const { formData, setFormData, resetForm } = useFormContext();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const handleSubmit = async () => {
    try {
      normalOrderSchema.parse(formData);
      setError(null);
      // await api.post('/orders', formData); // Uncomment and implement
      setSuccess('注文が完了しました！');
      resetForm();
    } catch (e: unknown) {
      if (e instanceof ZodError) {
        setError(e.errors?.[0]?.message || '入力エラー');
      } else {
        setError('Unknown error');
      }
    }
  };
  return (
    <div className='space-y-4'>
      <Input
        placeholder='Order ID'
        type='number'
        value={formData.orderId || ''}
        onChange={(e) => setFormData({ orderId: Number(e.target.value) })}
      />
      {isSpecial && (
        <Input
          placeholder='Discount Code'
          value={formData.discountCode || ''}
          onChange={(e) => setFormData({ discountCode: e.target.value })}
        />
      )}
      {error && <div className='text-red-500 text-sm'>{error}</div>}
      {success && <div className='text-green-600 text-sm'>{success}</div>}
      <div className='flex gap-2'>
        <Button variant='secondary' onClick={onBack}>
          Back
        </Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
      {isSpecial && (
        <div className='text-blue-600 text-xs'>
          特別注文の割引コードが適用されます
        </div>
      )}
    </div>
  );
}

export function NoteForSpecialOrder() {
  return <div className='text-blue-600 text-xs mt-2'>※ 特別注文です</div>;
}

export function getNormalSteps(
  isSpecial: boolean,
  handlers: {
    onNext: () => void;
    onBack: () => void;
    onSubmit: () => void;
  }
) {
  return [
    <StepOne key='step1' onNext={handlers.onNext} />,
    <StepTwo key='step2' onNext={handlers.onNext} onBack={handlers.onBack} />,
    <StepThree key='step3' onBack={handlers.onBack} isSpecial={isSpecial} />,
  ];
}
