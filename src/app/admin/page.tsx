'use client';

import { FormPageLayout } from '@/components/shared';
import { AdminOrderForm } from '@/features/order-form';

export default function AdminPage() {
  return (
    <FormPageLayout title='Admin Form'>
      <AdminOrderForm />
    </FormPageLayout>
  );
}
