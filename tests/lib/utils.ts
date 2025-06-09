import { describe, it, expect } from 'vitest';
import { cn } from '@/lib/utils';

describe('cn utility', () => {
  it('should join class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('should handle conditional classes', () => {
    const isActive = true;
    expect(cn('foo', { bar: isActive, baz: !isActive })).toBe('foo bar');
  });

  it('should merge Tailwind conflicting classes', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4'); // tailwind-merge should prefer later
  });

  it('should handle undefined and false values', () => {
    expect(cn('foo', undefined, false, 'bar')).toBe('foo bar');
  });

  it('should handle empty input', () => {
    expect(cn()).toBe('');
  });

  it('should handle multiple objects', () => {
    expect(cn({ foo: true }, { bar: true }, { baz: false })).toBe('foo bar');
  });

  it('should merge Tailwind color classes', () => {
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500');
  });
});
