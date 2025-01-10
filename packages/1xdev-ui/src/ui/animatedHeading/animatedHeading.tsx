'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { UiText } from '@uireact/text'
import styles from "./animatedHeading.module.scss";
import { renderDynamicPhrase } from "../../utils";

type PhraseDataProps = {
  phrase: string;
  keyWords: string[];
  keyDescriptions: string[];
}

export function AnimatedHeading({ phrase, keyWords, keyDescriptions }: PhraseDataProps) {
  const { getPhrase, next, splitPhrase } = renderDynamicPhrase({phrase, keyWords, keyDescriptions});
  const [phrases, setPhrases] = useState(getPhrase());
  const phraseParts = splitPhrase(phrases);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhrases(next());
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
                {content.slice(1, -1)}{' '}
                </UiText>
            </motion.span>
          </AnimatePresence>
          ) : (
              <UiText size='xlarge' key={key}>{content}{' '} </UiText>
          )
        )}
      </div>
    </div>
  </div>
  )
}