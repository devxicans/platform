'use client'
import styles from './home.module.css'
import { useLocalization } from '../../lib/context/loc-context'
import { motion } from 'framer-motion';

export default function AppPage() {
  const loc = useLocalization();
  const words = loc.heroTextAnimateWords;
  const descriptions = loc.heroTextAnimateDescriptions;

  return (
    <div className={styles.main}>
      <p data-testid="title" className={styles.hero}>{loc.heroText}</p>
    </div>
  )
}