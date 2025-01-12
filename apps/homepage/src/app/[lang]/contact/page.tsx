import styles from "./contactPage.module.scss";
import { ContactForm} from "./contactForm";

export default function ContactPage() {
  return (
    <div className={styles.main}>
      <ContactForm/>
    </div>
  );
}
