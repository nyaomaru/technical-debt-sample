import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { NormalOrderForm } from '@/features/order-form/components/NormalOrderForm';

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    refresh: vi.fn(),
    back: vi.fn(),
    prefetch: vi.fn(),
  }),
}));

describe('NormalOrderForm', () => {
  it('renders without crashing', () => {
    render(<NormalOrderForm />);

    const input = screen.getByPlaceholderText(/name/i);
    assert.exists(input);
  });
});
