'use client';

import { Input } from '@/components/ui';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { useFormContext } from 'react-hook-form';

type FormInputFieldProps = {
  name: string;
  placeholder: string;
  type?: string;
};

export function FormInputField({
  name,
  placeholder,
  type = 'text',
}: FormInputFieldProps) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{placeholder}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              type={type}
              {...field}
              onChange={(e) =>
                type === 'number'
                  ? field.onChange(e.target.valueAsNumber)
                  : field.onChange(e.target.value)
              }
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
