'use client'
import styles from "../homePage.module.scss";
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { renderDynamicPhrase } from './renderDynamicPhrase';
import { UiText } from '@uireact/text'

const phraseData = {
  phrase: "We {keyWords} the future while being {keyDescriptions}",
  keyWords: ["{engineer}", '{create}', '{code}'],
  keyDescriptions: ['{humans}', '{developers}', '{artists}']
}

export function HeroMessage() {
  const { getPhrase, next, splitPhrase } = renderDynamicPhrase(phraseData);
  const [phrase, setPhrase] = useState(getPhrase());
  const phraseParts = splitPhrase(phrase);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhrase(next());
    }, 3000);
    return () => clearInterval(interval);
  }, [next]);


  return (
    <div data-testid='hero message'>
    <div className={styles.hero}>
      <div className={styles.wrapper}>
        {phraseParts.map(({ content, isDynamic, key }) =>
          isDynamic ? (
          <AnimatePresence key={key} initial={false} mode="wait">
            <motion.span
              key={content}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={styles.dynamic}
            >
                <UiText size='xlarge' category='tertiary'>
                  {content.slice(1, -1)}
                </UiText>
            </motion.span>
          </AnimatePresence>
          ) : (
            <UiText size='xlarge' key={key}>{content}</UiText>
          )
        )}
      </div>
    </div>
  </div>
  )
}