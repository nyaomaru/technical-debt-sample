'use client';

import { AdminOrderForm } from '@/features/order-form';

export default function AdminPage() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-8'>
      <h1 className='text-2xl font-bold'>Admin Form</h1>
      <div className='mt-4'>
        <AdminOrderForm />
      </div>
    </div>
  );
}
