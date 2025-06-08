'use client';

import React, { createContext, useContext, useState } from 'react';

export type FormData = {
  name: string;
  email: string;
  phone: string;
  orderId: number;
  discountCode?: string;
};

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
};
const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({
  children,
  initialDiscountCode,
}: {
  children: React.ReactNode;
  initialDiscountCode?: string;
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
