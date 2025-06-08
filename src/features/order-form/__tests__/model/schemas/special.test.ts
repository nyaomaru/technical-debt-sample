import { describe, it, expect } from 'vitest';
import { specialOrderSchema } from '../../../model/schemas/special';

describe('specialOrderSchema', () => {
  it('should pass with valid data', () => {
    const data = {
      name: 'Jane Doe',
      email: 'jane@example.com',
      phone: '+12345678901',
      orderId: 2,
      discountCode: 1234,
    };
    const result = specialOrderSchema.safeParse(data);
    expect(result.success).toBe(true);
  });

  it('should fail if required fields are missing', () => {
    const data = {};
    const result = specialOrderSchema.safeParse(data);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors.length).toBeGreaterThan(0);
    }
  });
});
