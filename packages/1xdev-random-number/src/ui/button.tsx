'use client'

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button",
  onClick?: () => void;
}

export const Button = ({ children, className, type, onClick} : ButtonProps) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  )
}