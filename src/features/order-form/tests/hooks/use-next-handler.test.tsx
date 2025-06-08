import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';
import { useNextHandler } from '../../hooks/use-next-handler';

describe('useNextHandler', () => {
  it('should call onNext when validation passes', async () => {
    const onNext = vi.fn();

    const Wrapper = ({ children }: { children: React.ReactNode }) => {
      const methods = useForm();
      vi.spyOn(methods, 'trigger').mockResolvedValue(true);

      return <FormProvider {...methods}>{children}</FormProvider>;
    };

    const { result } = renderHook(
      () => useNextHandler(['name', 'email'], onNext),
      { wrapper: Wrapper }
    );

    await result.current();

    expect(onNext).toHaveBeenCalledTimes(1);
  });

  it('should not call onNext when validation fails', async () => {
    const onNext = vi.fn();

    const Wrapper = ({ children }: { children: React.ReactNode }) => {
      const methods = useForm();
      vi.spyOn(methods, 'trigger').mockResolvedValue(false);

      return <FormProvider {...methods}>{children}</FormProvider>;
    };

    const { result } = renderHook(
      () => useNextHandler(['name', 'email'], onNext),
      { wrapper: Wrapper }
    );

    await result.current();

    expect(onNext).not.toHaveBeenCalled();
  });
});
