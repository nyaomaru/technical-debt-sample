type FormFooterProps = {
  children: React.ReactNode;
  align?: 'start' | 'center' | 'end' | 'between';
};

export function FormFooter({ children, align = 'end' }: FormFooterProps) {
  const justify = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
  }[align];

  return <div className={`mt-4 flex ${justify}`}>{children}</div>;
}
