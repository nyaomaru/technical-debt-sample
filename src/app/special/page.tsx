'use client';

import { FormPageLayout } from '@/components/shared';
import { SpecialOrderForm } from '@/features/order-form';

export default function SpecialPage() {
  return (
    <FormPageLayout title='Special Form'>
      <SpecialOrderForm />
    </FormPageLayout>
  );
}
