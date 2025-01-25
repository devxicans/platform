import { CSSProperties, ReactNode } from 'react'
import styles from './card.module.scss'

type Props = {
  children?: ReactNode
  customStyles?: CSSProperties
  title: string
  description: string
}

export function Card({children, customStyles, title, description}: Props) {
  return (
    <div className={styles.card} style={customStyles}>
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
    </div>
  )
}