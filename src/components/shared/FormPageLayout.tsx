'use client';

import { Heading } from './Heading';

type FormPageLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export function FormPageLayout({ title, children }: FormPageLayoutProps) {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-8'>
      <Heading level={1}>{title}</Heading>
      <div className='mt-4'>{children}</div>
    </div>
  );
}
