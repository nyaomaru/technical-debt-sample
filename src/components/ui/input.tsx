'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        'file:text-white placeholder:text-gray-400 selection:bg-blue-500 selection:text-white',
        'bg-neutral-800 border border-white/20 text-white',
        'flex h-10 w-full rounded-md px-4 py-2 text-base shadow transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'md:text-sm',
        className
      )}
      {...props}
    />
  );
}

export { Input };
