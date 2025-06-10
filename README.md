# Technical Debt Sample

This repository demonstrates how to refactor a form component suffering from technical debt.

It is built with `Next.js` (App Router), `zod`, `React Hook Form (RHF)`, and `shadcn/ui`.

---

## Philosophy

- Feature-based architecture with App Router
- Form validation using `zod`
- Form logic implemented using `react-hook-form`
- UI styled with `tailwindcss` and `shadcn/ui` components

---

## Problem

Imagine you created a bloated `OrderForm` component like this:

<details>
<summary>Click to expand code sample</summary>

```tsx
import { useState, useEffect } from 'react';
import {
  stepOneSchema,
  stepTwoSchema,
  stepThreeSchema,
  stepFourSchema,
} from './formSchema';

type Form = {
  customerName: string; // Step1
  email: string; // Step1
  phone: string; // Step2
  orderId: number; // Step3
  discountCode?: number; // Step3 (only special)
  remarks?: string; // Step4 (only admin)
};

export function OrderForm({
  isSpecial,
  isAdmin,
}: {
  isSpecial: boolean;
  isAdmin: boolean;
}) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Form>({
    customerName: '',
    email: '',
    phone: '',
    orderId: 0,
    discountCode: undefined,
    remarks: undefined,
  });

  useEffect(() => {
    if (isSpecial) {
      // If it is special order, init to discountCode
      setFormData((prev) => ({
        ...prev,
        discountCode: 666,
      }));
    }
  }, [isSpecial]);

  const handleNextStep = async () => {
    try {
      if (step === 1) {
        stepOneSchema.parse(formData);
        setStep(2);
      } else if (step === 2) {
        stepTwoSchema.parse(formData);
        setStep(3);
      } else if (step === 3) {
        stepThreeSchema(isSpecial).parse(formData);
        // If admin user, go to step 4. Otherwise to submit.
        if (isAdmin) {
          setStep(4);
        } else {
          await handleSubmit();
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleSubmit = async () => {
    try {
      // Only Step4, validate stepFourSchema
      if (isAdmin && step === 4) {
        stepFourSchema.parse(formData);
      }
      await api.post('/orders', formData);
      alert('Succeeded order！');
    } catch (e) {
      console.error(e);
      alert('Denied order...');
    }
  };

  return (
    <div>
      {step === 1 && (
        <StepOne
          data={formData}
          setFormData={setFormData}
          onNext={handleNextStep}
        />
      )}
      {step === 2 && (
        <StepTwo
          data={formData}
          setFormData={setFormData}
          onBack={() => setStep(1)}
          onNext={handleNextStep}
        />
      )}
      {step === 3 && (
        <StepThree
          data={formData}
          setFormData={setFormData}
          onBack={() => setStep(2)}
          onNext={handleNextStep}
          showDiscountField={isSpecial}
        />
      )}
      {step === 4 && (
        <StepFour
          data={formData}
          setFormData={setFormData}
          onBack={() => setStep(3)}
          onSubmit={handleSubmit}
        />
      )}
      {isSpecial && <NoteForSpecialOrder />}
      {isAdmin && <NoteForSpecialOrder />}
    </div>
  );
}
```

</details>

This is a typical case of technical debt — too much logic crammed into a single component, making it hard to maintain, test, or extend.

## Develop

### Run dev server

```sh
pnpm dev
```

### Run tests

```sh
pnpm test
```

### Add UI components (via `shadcn`)

```sh
pnpm dlx shadcn@latest add {componentName}
```

## Related Article

- [Zenn: Refactor technical debt in forms](https://zenn.dev/nyaomaru/articles/technical-debt-code)
