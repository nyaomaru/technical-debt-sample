'use client';

import type { JSX } from 'react';
import { cn } from '@/lib/utils';

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};

export function Heading({ level = 1, children, className }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={cn('font-bold', headingSize(level), className)}>
      {children}
    </Tag>
  );
}

function headingSize(level: number) {
  switch (level) {
    case 1:
      return 'text-2xl';
    case 2:
      return 'text-xl';
    case 3:
      return 'text-lg';
    case 4:
      return 'text-md';
    default:
      return 'text-sm';
  }
}
