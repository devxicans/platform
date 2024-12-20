'use client'
import styles from './home.module.css'
import { useLocalization } from '../../lib/context/loc-context'

export default function AppPage() {
  const loc = useLocalization();

  return (
    <div className={styles.main}>
      <h1 data-testid="title" className={styles.hero}>{loc.title}</h1>
    </div>
  )
}