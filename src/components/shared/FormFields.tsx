type FormFieldsProps = {
  children: React.ReactNode;
};

export function FormFields({ children }: FormFieldsProps) {
  return <div className='space-y-4'>{children}</div>;
}
