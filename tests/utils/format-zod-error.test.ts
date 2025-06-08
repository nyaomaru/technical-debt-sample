import { describe, it, expect } from 'vitest';
import { z, ZodError } from 'zod';
import { formatZodErrors } from '@/utils/format-zod-error';

describe('formatZodErrors', () => {
  it('should format a single ZodError correctly', () => {
    const schema = z.object({
      name: z.string(),
    });
    const result = schema.safeParse({});

    expect(result.success).toBe(false);

    const formatted = formatZodErrors(result.error!);

    expect(formatted).toEqual(['• name: Required']);
  });

  it('should format multiple errors correctly', () => {
    const schema = z.object({
      name: z.string(),
      age: z.number(),
    });
    const result = schema.safeParse({ name: 123 });

    expect(result.success).toBe(false);

    const formatted = formatZodErrors(result.error!);

    expect(formatted).toContainEqual(expect.stringContaining('name'));
    expect(formatted).toContainEqual(expect.stringContaining('age'));
  });

  it('should handle nested fields correctly', () => {
    const schema = z.object({
      user: z.object({
        name: z.string(),
      }),
    });

    const result = schema.safeParse({ user: {} });

    expect(result.success).toBe(false);

    const formatted = formatZodErrors(result.error!);

    expect(formatted).toEqual(['• user.name: Required']);
  });

  it('should fallback to "unknown" if path is empty', () => {
    const fakeError = new ZodError([
      {
        code: 'custom',
        message: 'Something went wrong',
        path: [],
      },
    ]);

    const formatted = formatZodErrors(fakeError);

    expect(formatted).toEqual(['• unknown: Something went wrong']);
  });
});
