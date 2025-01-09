import { CustomInput } from "../components";
import styles from "./contactForm.module.scss";

export function ContactForm() {
  return (
      <form className={styles.form}>
        <h2 className={styles.title}>Tell us about your project</h2>
        <CustomInput
          type="text"
          name="name"
          id="name-input"
          placeholder="Your name"
          label="Name"
        />
        <CustomInput
          type="text"
          name="email"
          id="email-input"
          placeholder="Your email"
          label="Email"
        />
        <CustomInput
          type="number"
          name="name"
          id="phone-input"
          placeholder="Your phone"
          label="Phone"
        />
        <button type="submit" className={styles.btn}>
          Contact
        </button>
      </form>
  );
}
