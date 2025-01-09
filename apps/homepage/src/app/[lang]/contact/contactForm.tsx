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
          label="Name"
          icon="Mail"
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
          name="name"
          id="phone-input"
          label="Phone"
          icon="Mail"
        />
        <button type="submit" className={styles.btn}>
          Contact
        </button>
      </form>
  );
}
