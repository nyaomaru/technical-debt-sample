'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { MultiStepForm } from './MultiStepForm';
import { getSpecialSteps } from './steps/special';
import { specialOrderSchema } from '../model/schemas/special';
import type { SpecialOrderSchemaType } from '../model/schemas/special';

export function SpecialOrderForm() {
  const methods = useForm<SpecialOrderSchemaType>({
    resolver: zodResolver(specialOrderSchema),
    mode: 'onTouched',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      orderId: 0,
      discountCode: 0,
    },
  });

  return (
    <FormProvider {...methods}>
      <MultiStepForm getSteps={getSpecialSteps} />
    </FormProvider>
  );
}
