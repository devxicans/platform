'use client'
import styles from './gallery.module.scss'
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { UiIcon } from '@uireact/icons'
import Link from 'next/link'
import { XDevCard } from '../XDevCard'
interface Project {
    id: number;
    title: string;
    description: string;
}

interface GalleryProps {
  projects: Project[]
}

export const XDevGallery = ({projects}: GalleryProps ) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + 1 < projects.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleBefore = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={styles.gallery}>
      <div className={styles['gallery-cards']}>
        <AnimatePresence>
          {projects.slice(currentIndex, currentIndex + 4).map((project, index) => (
            <motion.div
              className={`${styles.card} ${styles[`card-${index}`]}`}
              key={project.id}
              initial={{ x: 50, opacity: 0 }}
              animate={{
                x: -index * 30,
                opacity: 1 - index * 0.2,
                scale: 1 - index * 0.05,
              }}
              transition={{ duration: 0.5 }}
              >
              <XDevCard title={project.title} description={project.description}>
                {project.id === currentIndex ? <Link href={`/project/${currentIndex}`}>See more</Link> : null}
              </XDevCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className={styles['gallery-navigation']}>
        <div>
          <h3>This is the <span>art</span> <br/> we <span>engineer</span> and <br/> <span>code</span> everyday.</h3>
        </div>
        <div>
          {currentIndex > 0 && <button onClick={handleBefore}><UiIcon icon='ArrowClearLeft' size='large'/> Before</button>}
          <button onClick={handleNext}>
            {currentIndex + 1 >= projects.length ? "Start Over" :<>Next <UiIcon icon='ArrowClearRight' size='large'/></>}
          </button>
        </div>
      </div>
    </div>
  )
}
