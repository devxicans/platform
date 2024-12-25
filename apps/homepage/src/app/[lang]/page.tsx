'use client'
import styles from './home.module.css'
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const keyWords = [
  { word: 'engineer', description: 'humans' },
  { word: 'create', description: '[developers]' },
  { word: 'code', description: 'artists' },
];

export default function AppPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % keyWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.hero}>
      <div data-testid='header' className={styles.animation}>
        <span>We </span>
        <AnimatePresence initial={false} mode='wait'>
          <motion.span
            key={keyWords[index].word}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={styles.word}
          >
            {keyWords[index].word}
          </motion.span>
        </AnimatePresence>
        <span> the future </span>
      </div>
      <div className={styles.animation}>
        <span> while being </span>
        <AnimatePresence initial={false} mode='wait'>
          <motion.span
            key={keyWords[index].description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={styles.description}
          >
            {keyWords[index].description}.
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  )
}