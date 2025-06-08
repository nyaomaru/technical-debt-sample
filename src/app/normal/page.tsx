'use client';

import { FormPageLayout } from '@/components/shared';
import { NormalOrderForm } from '@/features/order-form';

export default function NormalPage() {
  return (
    <FormPageLayout title='Normal Form'>
      <NormalOrderForm />
    </FormPageLayout>
  );
}
