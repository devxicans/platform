'use client'
import { AnimatedHeading } from "@1xdev/ui"

const animatedPhraseData = {
  phrase: "We {keyWords} the future while being {keyDescriptions}",
  keyWords: ["{engineer}", '{create}', '{code}'],
  keyDescriptions: ['{humans}', '{developers}', '{artists}']
}

export default function AppPage() {
  return (
    <AnimatedHeading phrase={animatedPhraseData.phrase } keyWords={animatedPhraseData.keyWords} keyDescriptions={animatedPhraseData.keyDescriptions} animationTime={1000} />
  )
}