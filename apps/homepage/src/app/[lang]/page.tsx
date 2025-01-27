'use client'
import { AnimatedHeading } from "@1xdev/ui"
import { XDevGallery } from "@1xdev/ui"
import styles from './hero.module.scss'
import { animatedPhraseData, projects } from "./homeData"

export default function AppPage() {
  return (
    <div className={styles.hero}>
      <AnimatedHeading phrase={animatedPhraseData.phrase} keyWords={animatedPhraseData.keyWords} keyDescriptions={animatedPhraseData.keyDescriptions} animationTime={1000} />
      <XDevGallery projects={projects} />
    </div>
  )
}