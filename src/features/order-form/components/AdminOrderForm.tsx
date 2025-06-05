'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MultiStepForm } from './MultiStepForm';
import { getAdminSteps } from './steps/admin';
import { adminOrderSchema } from '../model/schemas/admin';
import type { AdminOrderSchemaType } from '../model/schemas/admin';

export function AdminOrderForm() {
  const methods = useForm<AdminOrderSchemaType>({
    resolver: zodResolver(adminOrderSchema),
    mode: 'onTouched',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      orderId: 0,
      remarks: '',
    },
  });

  return (
    <FormProvider {...methods}>
      <MultiStepForm getSteps={getAdminSteps} />
    </FormProvider>
  );
}
