import { useFormContext } from 'react-hook-form';

export function useNextHandler(fields: string[], onNext: () => void) {
  const { trigger } = useFormContext();

  return async () => {
    const valid = await trigger(fields);
    if (valid) {
      onNext();
    }
  };
}
