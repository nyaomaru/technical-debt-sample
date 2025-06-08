'use client';

import type { FormHTMLAttributes, HTMLAttributes } from 'react';

type DivProps = {
  as?: 'div';
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

type FormProps = {
  as: 'form';
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
} & Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'>;

type FormLayoutProps = DivProps | FormProps;

export function FormLayout(props: FormLayoutProps) {
  if (props.as === 'form') {
    const { children, ...rest } = props;
    return (
      <form className='flex-1 flex flex-col justify-between' {...rest}>
        {children}
      </form>
    );
  }

  const { children, ...rest } = props;
  return (
    <div className='flex-1 flex flex-col justify-between' {...rest}>
      {children}
    </div>
  );
}
