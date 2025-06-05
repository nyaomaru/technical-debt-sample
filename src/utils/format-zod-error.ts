import { ZodError } from 'zod';

export function formatZodErrors(error: ZodError) {
  return error.errors.map((err) => {
    const field = err.path.join('.') || 'unknown';
    return `• ${field}: ${err.message}`;
  });
}
