"use client";
import { XDevInput } from "@1xdev/ui";
import { XDevTextArea } from "@1xdev/ui";
import styles from "./contactForm.module.scss";
import { useLocalization } from "../../../lib/context/loc-context";
import { useState, useActionState } from "react";
import { submitForm } from "./submitForm";

export function ContactForm() {
  const loc = useLocalization();

  const [ data, action, isLoading ] = useActionState(submitForm, undefined);

  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChangeInputs = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactInfo({
      ...contactInfo,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <form className={styles.form} action={action}>
      <h2 className={styles.title}>{loc.contactFormTitle}</h2>
      <div className={styles.inputContainer}>
        <XDevInput
          type="text"
          name="name"
          id="name-input"
          label={loc.nameInput}
          icon="UserSimple"
          value={contactInfo.name}
          onChange={handleChangeInputs}
        />
        {data?.errors?.name && (
          <span className={styles.error}>{data?.errors?.name?.[0].message} </span>
        )}
      </div>
      <div className={styles.inputContainer}>
        <XDevInput
          type="text"
          name="email"
          id="email-input"
          label={loc.emailInput}
          icon="Mail"
          value={contactInfo.email}
          onChange={handleChangeInputs}
        />
        {data?.errors?.email?.map((error, index) => (
          <span key={`Error-message-${index}`} className={styles.error}>
            {error.message}{" "}
          </span>
        ))}
      </div>
      <div className={styles.inputContainer}>
        <XDevInput
          type="number"
          name="phone"
          id="phone-input"
          label={loc.phoneInput}
          icon="CirclePhone"
          value={contactInfo.phone}
          onChange={handleChangeInputs}
        />
        {data?.errors?.phone && (
          <span className={styles.error}>{data?.errors?.phone?.[0].message} </span>
        )}
      </div>
      <div className={styles.inputContainer}>
        <XDevTextArea
          name="message"
          id="message-area"
          label={loc.messageInput}
          icon="Send"
          value={contactInfo.message}
          onChange={handleChangeInputs}
        />
        {data?.errors?.message && (
          <span className={styles.error}>{data?.errors?.message?.[0].message} </span>
        )}
      </div>
      <button disabled={isLoading} type="submit" className={styles.btn}>
        {loc.submitBtn}
      </button>
    </form>
  );
}
