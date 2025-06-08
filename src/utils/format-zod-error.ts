import { ZodError } from 'zod';

/**
 * Formats a ZodError into a human-readable list of error messages.
 *
 * Each error will be prefixed with a bullet point (•), and will include the field path and the corresponding error message.
 *
 * @param error - The ZodError object containing validation errors.
 * @returns An array of formatted error message strings.
 *
 * @example
 * ```ts
 * const schema = z.object({ name: z.string() });
 * const result = schema.safeParse({});
 * if (!result.success) {
 *   const messages = formatZodErrors(result.error);
 *   console.log(messages); // ['• name: Required']
 * }
 * ```
 */
export function formatZodErrors(error: ZodError) {
  return error.errors.map((err) => {
    const field = err.path.join('.') || 'unknown';
    return `• ${field}: ${err.message}`;
  });
}
