'use client'

import styles from './button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button",
  onClick?: () => void;
}

export const Button = ({ children, className = '', type, onClick} : ButtonProps) => {
  return (
    <button type={type} className={`${className} ${styles.btn}`} onClick={onClick}>
      {children}
    </button>
  )
}