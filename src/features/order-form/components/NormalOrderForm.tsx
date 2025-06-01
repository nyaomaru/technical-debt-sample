'use client';

import { MultiStepForm } from './MultiStepForm';
import { getNormalSteps } from './steps/normal';
import { FormProvider } from '../model/FormContextProvider';

export function NormalOrderForm({
  isSpecial = false,
}: {
  isSpecial?: boolean;
}) {
  return (
    <FormProvider initialDiscountCode={isSpecial ? 'SPECIAL-OFFER' : undefined}>
      <MultiStepForm
        steps={getNormalSteps(isSpecial, {
          onNext: () => {},
          onBack: () => {},
          onSubmit: () => {},
        })}
      />
    </FormProvider>
  );
}
