'use client'
import styles from './home.module.css'
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { UiViewport } from '@uireact/foundation';
import { renderDynamicPhrase } from './utils';

const phraseData = {
  phrase: "We {keyWords} the future while being {keyDescriptions}",
  keyWords: ['{engineer}', '{create}', '{code}'],
  keyDescriptions: ['{humans}', '{developers}', '{artists}']
}

export default function AppPage() {
  const { getPhrase, next } = renderDynamicPhrase(phraseData);
  const [phrase, setPhrase] = useState(getPhrase());

  useEffect(() => {
    const interval = setInterval(() => {
      setPhrase(next());
    }, 3000);
    return () => clearInterval(interval);
  }, [next]);

  const splitPhrase = (phrase: string) => {
    return phrase.split(" ").map((word, idx) => ({
      content: word,
      isDynamic: word.startsWith("{") && word.endsWith("}"),
      key: idx
    }));
  };

  const phraseParts = splitPhrase(phrase);

  return (
    <>
      <UiViewport criteria='l|xl'>
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
                  {content.slice(1, -1)}
                </motion.span>
              </AnimatePresence>
              ) : (
                <span key={key}>{content} </span>
              )
            )}
          </div>
        </div>
      </UiViewport>
      {/* <UiViewport criteria='s|m'>
        <div className={styles.hero}>
          <div data-testid='header' className={styles.animation_s_m}>
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
          <div className={styles.animation_s_m}>
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
      </UiViewport> */}
    </>
  )
}