'use client';

import React, { createContext, useContext, useState } from 'react';
import { z } from 'zod';

import { adminOrderSchema } from '@/features/order-form/model/schemas/admin';

export type FormData = z.infer<typeof adminOrderSchema>;

type FormContextType = {
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
  resetForm: () => void;
};

const defaultFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  orderId: 0,
  discountCode: undefined,
  remarks: '',
};
const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({
  children,
  initialDiscountCode,
}: {
  children: React.ReactNode;
  initialDiscountCode?: number;
}) {
  const [formData, setFormDataState] = useState<FormData>({
    ...defaultFormData,
    ...(initialDiscountCode ? { discountCode: initialDiscountCode } : {}),
  });

  const setFormData = (data: Partial<FormData>) =>
    setFormDataState((prev) => ({ ...prev, ...data }));

  const resetForm = () => setFormDataState(defaultFormData);

  return (
    <FormContext.Provider value={{ formData, setFormData, resetForm }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context)
    throw new Error('useFormContext must be used within a FormProvider');
  return context;
}
