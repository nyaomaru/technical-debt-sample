import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function that combines `clsx` and `tailwind-merge`.
 *
 * - Uses `clsx` to conditionally join class names.
 * - Then applies `tailwind-merge` to resolve Tailwind CSS class conflicts.
 *
 * @param inputs - An array of class names or conditional class name objects.
 * @returns A single merged class name string.
 *
 * @example
 * ```tsx
 * <div className={cn('p-2', { 'bg-red-500': isError, 'bg-green-500': !isError })} />
 * // When isError is true: 'p-2 bg-red-500'
 * // When isError is false: 'p-2 bg-green-500'
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
