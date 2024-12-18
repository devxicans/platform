'use client'
import styles from './home.module.css'
import { SupportedLanguages } from '../../types'
import { useLocalization } from '../../lib/context/loc-context'

export default async function AppPage() {
  const loc = useLocalization();

  return (
    <div className={styles.main}>
      <h1 className={styles.hero}>{loc.title}</h1>
    </div>
  )
}