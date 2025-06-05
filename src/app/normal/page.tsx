'use client';

import { NormalOrderForm } from '@/features/order-form';

export default function NormalPage() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-8'>
      <h1 className='text-2xl font-bold'>Normal Form</h1>
      <div className='mt-4'>
        <NormalOrderForm />
      </div>
    </div>
  );
}
