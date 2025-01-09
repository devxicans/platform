import { CustomInput } from "../components";
import { CustomTextArea } from "../components";
import styles from "./contactForm.module.scss";

export function ContactForm() {
  return (
    <form className={styles.form}>
      <h2 className={styles.title}>Tell us about your project</h2>
      <CustomInput
        type="text"
        name="name"
        id="name-input"
        label="Name"
        icon="UserSimple"
      />
      <CustomInput
        type="text"
        name="email"
        id="email-input"
        label="Email"
        icon="Mail"
      />
      <CustomInput
        type="number"
        name="phone"
        id="phone-input"
        label="Phone"
        icon="CirclePhone"
      />
      <CustomTextArea
        name="message"
        id="message-area"
        label="Message"
        icon="Send"
      />
      <button type="submit" className={styles.btn}>
        Contact
      </button>
    </form>
  );
}
