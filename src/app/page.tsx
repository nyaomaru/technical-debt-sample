'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'; // shadcnのラジオ

export default function Home() {
  const router = useRouter();
  const [role, setRole] = useState<'normal' | 'special' | 'admin'>('normal');

  const handleNavigate = () => {
    if (role) {
      router.push(`/${role}`);
    }
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-8 p-8'>
      <h1 className='text-2xl font-bold'>Order Form Demo</h1>
      <div className='flex flex-col gap-4 w-full max-w-sm'>
        <RadioGroup
          value={role}
          onValueChange={(val) =>
            setRole(val as 'normal' | 'special' | 'admin')
          }
        >
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='normal' id='normal' />
            <label htmlFor='normal' className='text-sm'>
              Normal Order
            </label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='special' id='special' />
            <label htmlFor='special' className='text-sm'>
              Special Order
            </label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='admin' id='admin' />
            <label htmlFor='admin' className='text-sm'>
              Admin Order
            </label>
          </div>
        </RadioGroup>
        <Button onClick={handleNavigate}>Go to selected Form</Button>
      </div>
    </div>
  );
}
