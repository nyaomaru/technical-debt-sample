'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { MultiStepForm } from './MultiStepForm';
import { getNormalSteps } from './steps/normal';
import { normalOrderSchema } from '../model/schemas/normal';
import type { NormalOrderSchemaType } from '../model/schemas/normal';

export function NormalOrderForm() {
  const methods = useForm<NormalOrderSchemaType>({
    resolver: zodResolver(normalOrderSchema),
    mode: 'onTouched',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      orderId: 0,
    },
  });

  return (
    <FormProvider {...methods}>
      <MultiStepForm getSteps={getNormalSteps} />
    </FormProvider>
  );
}
