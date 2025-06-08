import { describe, it, expect } from 'vitest';
import { normalOrderSchema } from '../../../model/schemas/normal';

describe('normalOrderSchema', () => {
  it('should pass with valid data', () => {
    const data = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+12345678901',
      orderId: 1,
    };
    const result = normalOrderSchema.safeParse(data);
    expect(result.success).toBe(true);
  });

  it('should fail if name is empty', () => {
    const data = {
      name: '',
      email: 'john@example.com',
      phone: '+12345678901',
      orderId: 1,
    };
    const result = normalOrderSchema.safeParse(data);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].message).toBe('Name is required');
    }
  });

  it('should fail if email is invalid', () => {
    const data = {
      name: 'John Doe',
      email: 'not-an-email',
      phone: '+12345678901',
      orderId: 1,
    };
    const result = normalOrderSchema.safeParse(data);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].message).toBe('Invalid email address');
    }
  });

  it('should fail if phone is too short', () => {
    const data = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123',
      orderId: 1,
    };
    const result = normalOrderSchema.safeParse(data);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].message).toBe(
        'Phone number must be at least 10 digits'
      );
    }
  });

  it('should fail if orderId is not positive', () => {
    const data = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+12345678901',
      orderId: 0,
    };
    const result = normalOrderSchema.safeParse(data);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].message).toBe('OrderId must be positive');
    }
  });
});
