import { NormalOrderForm } from '@/features/order-form';

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col items-center justify-center gap-8'>
      <NormalOrderForm />
    </main>
  );
}
