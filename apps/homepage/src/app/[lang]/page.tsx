"use client";
import { AnimatedHeading } from "@1xdev/ui";
import { ContactForm } from "./contact/contactForm";
import styles from "./homePage.module.scss"
import { TeamSlider } from "./components";

const animatedPhraseData = {
  phrase: "We {keyWords} the future while being {keyDescriptions}",
  keyWords: ["{engineer}", "{create}", "{code}"],
  keyDescriptions: ["{humans}", "{developers}", "{artists}"],
};

export default function AppPage() {
  return (
    <div className={styles.main}>
      <AnimatedHeading
        phrase={animatedPhraseData.phrase}
        keyWords={animatedPhraseData.keyWords}
        keyDescriptions={animatedPhraseData.keyDescriptions}
        animationTime={1000}
      />
      <div className={styles.form}>
      <TeamSlider/>
      <ContactForm />
      </div>
    </div>
  );
}
