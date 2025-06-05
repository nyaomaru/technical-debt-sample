'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircleIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { FormData } from '@/features/order-form/model/form-context';

export default function ThanksPage() {
  const [orderData, setOrderData] = useState<FormData>();
  const [message, setMessage] = useState('');
  const fullMessage = 'Your order has been received successfully.';
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const data = sessionStorage.getItem('orderData');
    if (data) {
      setOrderData(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    // typewriter effect
    let i = 0;
    const typing = setInterval(() => {
      setMessage((prev) => prev + fullMessage.charAt(i));
      i++;
      if (i > fullMessage.length) {
        clearInterval(typing);
        setTimeout(() => setShowIcon(true), 500);
      }
    }, 50);

    return () => clearInterval(typing);
  }, []);

  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-8 space-y-8 text-center animate-fade-in'>
      {showIcon && (
        <CheckCircleIcon
          className='text-green-400 animate-bounce-in'
          size={80}
        />
      )}
      <h1 className='text-3xl font-bold text-white'>Thank you!</h1>
      <p className='text-lg text-gray-400 font-mono min-h-[1.5em]'>
        {message}
        <span className='blink-cursor'>_</span>
      </p>

      {orderData && (
        <div className='text-left bg-neutral-800 border border-white/20 p-6 rounded-xl shadow-lg w-full max-w-md'>
          <h2 className='text-lg font-bold text-white mb-4'>Submitted Data</h2>
          <pre className='text-sm text-gray-300 overflow-x-auto'>
            {JSON.stringify(orderData, null, 2)}
          </pre>
        </div>
      )}

      <Link href='/'>
        <Button size='lg' variant='outline'>
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
