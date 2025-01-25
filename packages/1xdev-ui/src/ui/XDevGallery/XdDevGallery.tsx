'use client'
import styles from './gallery.module.scss'
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { UiIcon } from '@uireact/icons'
import Link from 'next/link'

const projects = [
  {
    id: 0,
    title: "Lifta",
    description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos facilis tenetur ipsum obcaecati ducimus! Molestiae in assumenda recusandae accusamus accusantium nesciunt aliquid explicabo est, inventore blanditiis, facilis ipsa tempore fugiat!"
  },
  {
    id: 1,
    title: "Platform",
    description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos facilis tenetur ipsum obcaecati ducimus! Molestiae in assumenda recusandae accusamus accusantium nesciunt aliquid explicabo est, inventore blanditiis, facilis ipsa tempore fugiat!"
  },
  {
    id: 2,
    title: "Yumzo",
    description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos facilis tenetur ipsum obcaecati ducimus! Molestiae in assumenda recusandae accusamus accusantium nesciunt aliquid explicabo est, inventore blanditiis, facilis ipsa tempore fugiat!"
  },
  {
    id: 3,
    title: "Save The Budget",
    description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos facilis tenetur ipsum obcaecati ducimus! Molestiae in assumenda recusandae accusamus accusantium nesciunt aliquid explicabo est, inventore blanditiis, facilis ipsa tempore fugiat!"
  },
]

export const XDevGallery = () => {
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
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.id === currentIndex ? <Link href={`/project/${currentIndex}`}>See more</Link> : null}
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