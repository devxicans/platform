'use client'
import { AnimatedHeading } from "@1xdev/ui"
import { XDevGallery } from "@1xdev/ui"
import styles from './hero.module.scss'

const animatedPhraseData = {
  phrase: "We {keyWords} the future while being {keyDescriptions}",
  keyWords: ["{engineer}", '{create}', '{code}'],
  keyDescriptions: ['{humans}', '{developers}', '{artists}']
}

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

export default function AppPage() {
  return (
    <div className={styles.hero}>
      <AnimatedHeading phrase={animatedPhraseData.phrase} keyWords={animatedPhraseData.keyWords} keyDescriptions={animatedPhraseData.keyDescriptions} animationTime={1000} />
      <XDevGallery projects={projects} />
    </div>
  )
}