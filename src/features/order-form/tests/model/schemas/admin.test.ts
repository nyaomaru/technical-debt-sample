import { describe, it, expect } from 'vitest';
import { adminOrderSchema } from '../../../model/schemas/admin';

describe('adminOrderSchema', () => {
  const baseData = {
    name: 'Admin User',
    email: 'admin@example.com',
    phone: '+12345678901',
    orderId: 3,
  };

  it('should pass with valid remarks', () => {
    const data = {
      ...baseData,
      remarks: 'a'.repeat(500),
    };
    const result = adminOrderSchema.safeParse(data);
    expect(result.success).toBe(true);
  });

  it('should fail if remarks exceed 500 chars', () => {
    const data = {
      ...baseData,
      remarks: 'a'.repeat(501),
    };
    const result = adminOrderSchema.safeParse(data);
    expect(result.success).toBe(false);
    if (!result.success) {
      // Find the error for remarks
      const remarksError = result.error.errors.find(
        (e) => e.path[0] === 'remarks'
      );
      expect(remarksError?.message).toBe(
        'Remarks cannot exceed 500 characters'
      );
    }
  });
});
