type ButtonProps = {
  children: React.ReactNode;
  type?: 'submit' | 'button' | 'reset'
}

export function Button({ children, type }: ButtonProps) {
  return <button type={type}>
    {children}
  </button>
}