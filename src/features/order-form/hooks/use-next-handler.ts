import { useFormContext } from 'react-hook-form';

/**
 * Custom hook that returns a handler function to validate specified form fields and call a callback if validation succeeds.
 *
 * @param fields - The list of field names to validate.
 * @param onNext - The callback function to execute if validation passes.
 * @returns An async function that triggers validation and calls `onNext` on success.
 *
 * @example
 * ```ts
 * const handleNext = useNextHandler(['name', 'email'], () => {
 *   console.log('Validation passed!');
 * });
 * ```
 */
export function useNextHandler(fields: string[], onNext: () => void) {
  const { trigger } = useFormContext();

  return async () => {
    const valid = await trigger(fields);
    if (valid) {
      onNext();
    }
  };
}
