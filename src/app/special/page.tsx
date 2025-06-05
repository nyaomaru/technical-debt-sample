'use client';

import { SpecialOrderForm } from '@/features/order-form';

export default function SpecialPage() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-8'>
      <h1 className='text-2xl font-bold'>Special Form</h1>
      <div className='mt-4'>
        <SpecialOrderForm />
      </div>
    </div>
  );
}
