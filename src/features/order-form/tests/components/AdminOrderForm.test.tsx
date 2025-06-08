import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { AdminOrderForm } from '@/features/order-form/components/AdminOrderForm';

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    refresh: vi.fn(),
    back: vi.fn(),
    prefetch: vi.fn(),
  }),
}));

describe('AdminOrderForm', () => {
  it('renders without crashing', () => {
    render(<AdminOrderForm />);

    const input = screen.getByPlaceholderText(/name/i);
    assert.exists(input);
  });
});
