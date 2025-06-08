'use client';

import { CheckCircleIcon } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, useCallback } from 'react';

import { Button } from '@/components/ui';
import { Heading } from '@/components/shared';
import type { FormData } from '@/features/order-form/model/FormContextProvider';

export default function ThanksPage() {
  const [orderData, setOrderData] = useState<FormData>();
  const [message, setMessage] = useState('');
  const [showIcon, setShowIcon] = useState(false);
  const fullMessage = 'Your order has been received successfully.';

  const loadOrderData = useCallback(() => {
    const data = sessionStorage.getItem('orderData');
    if (data) {
      setOrderData(JSON.parse(data));
    }
  }, []);

  const startTypewriter = useCallback(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      index++;
      if (index <= fullMessage.length) {
        setMessage(fullMessage.slice(0, index));
      } else {
        clearInterval(intervalId);
        setTimeout(() => setShowIcon(true), 500);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [fullMessage]);

  useEffect(() => {
    loadOrderData();
    const stopTyping = startTypewriter();
    return () => stopTyping();
  }, [loadOrderData, startTypewriter]);

  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-8 space-y-8 text-center animate-fade-in'>
      {showIcon && (
        <CheckCircleIcon
          className='text-green-400 animate-bounce-in'
          size={80}
        />
      )}
      <Heading level={1}>Thank you!</Heading>
      <p className='text-lg text-gray-400 font-mono min-h-[1.5em]'>
        {message}
        <span className='blink-cursor'>_</span>
      </p>

      {orderData && (
        <div className='text-left bg-neutral-800 border border-white/20 p-6 rounded-xl shadow-lg w-full max-w-md'>
          <Heading level={2} className='mb-4'>
            Submitted Data
          </Heading>
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
