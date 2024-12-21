'use client'
import styles from './menuButton.module.scss';
import Link from 'next/link';

type menuButtonProps = {
  text:string;
  href:string;
}


export function MenuButton({ text, href } : menuButtonProps) {
  return (
      <Link href={href} className={styles.button}>{text}</Link>
  )
} 