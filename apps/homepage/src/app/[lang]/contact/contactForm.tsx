'use client'
import { CustomInput } from "@1xdev/ui";
import { CustomTextArea } from "@1xdev/ui";
import styles from "./contactForm.module.scss";
import { useLocalization } from '../../../lib/context/loc-context';

export function ContactForm() {
  const loc = useLocalization();
  
  return (
    <form className={styles.form}>
      <h2 className={styles.title}>{loc.contactFormTitle}</h2>
      <CustomInput
        type="text"
        name="name"
        id="name-input"
        label={loc.nameInput}
        icon="UserSimple"
      />
      <CustomInput
        type="text"
        name="email"
        id="email-input"
        label={loc.emailInput}
        icon="Mail"
      />
      <CustomInput
        type="number"
        name="phone"
        id="phone-input"
        label={loc.phoneInput}
        icon="CirclePhone"
      />
      <CustomTextArea
        name="message"
        id="message-area"
        label={loc.messageInput}
        icon="Send"
      />
      <button type="submit" className={styles.btn}>
        {loc.submitBtn}
      </button>
    </form>
  );
}
