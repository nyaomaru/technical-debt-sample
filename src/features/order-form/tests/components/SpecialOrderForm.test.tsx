import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { SpecialOrderForm } from '@/features/order-form/components/SpecialOrderForm';

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    refresh: vi.fn(),
    back: vi.fn(),
    prefetch: vi.fn(),
  }),
}));

describe('SpecialOrderForm', () => {
  it('renders without crashing', () => {
    render(<SpecialOrderForm />);

    const input = screen.getByPlaceholderText(/name/i);
    assert.exists(input);
  });
});
