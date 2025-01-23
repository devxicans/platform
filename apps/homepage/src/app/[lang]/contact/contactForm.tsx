"use client";
import { XDevInput } from "@1xdev/ui";
import { XDevTextArea } from "@1xdev/ui";
import styles from "./contactForm.module.scss";
import { useLocalization } from "../../../lib/context/loc-context";
import { useState, useActionState, useEffect } from "react";
import { submitForm } from "./submitForm";
import { UiIcon } from "@uireact/icons";
import { UiText } from "@uireact/text";

export function ContactForm() {
  const loc = useLocalization();

  const [data, action, isLoading] = useActionState(submitForm, undefined);

  const charLimit = 500;

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

  const clearForm = () => {
    setContactInfo({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  useEffect(() => {
    if (data?.success) {
      clearForm();
    }
  }, [data]);

  return (
    <form className={styles.form} action={action}>
      <h2 className={styles.title}>{loc.contactFormTitle}</h2>
      {data?.message && (
        <>
          <div
            className={`${styles.message} ${
              data.success ? styles.succesSubmit : styles.errorSubmit
            }`}
          >
            <UiIcon
              icon={data.success ? `CheckCircle` : `XCircle`}
              category={data.success ? `positive` : `error`}
              coloration="dark"
            />
            <p> {data.message}</p>
          </div>
        </>
      )}
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
          <UiText inline className={styles.error} category="error" padding={{all: 'one'}}>
            {data?.errors?.name?.[0].message}{" "}
          </UiText>
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
          <UiText inline key={`Error-message-${index}`} className={styles.error} category="error" padding={{all: 'one'}}>
            {error.message}{" "}
          </UiText>
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
          <UiText inline className={styles.error} category="error" padding={{all: 'one'}}>
            {data?.errors?.phone?.[0].message}{" "}
          </UiText>
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
          maxLength={charLimit}
        />
        {data?.errors?.message && (
          <UiText inline className={styles.error} category="error" padding={{all: 'one'}}>
            {data?.errors?.message?.[0].message}{" "}
          </UiText>
        )}
      </div>
      <button disabled={isLoading} type="submit" className={styles.btn}>
        {loc.submitBtn}
        {isLoading && <UiIcon icon="LoadingSpinner" category="primary" coloration="dark" />}
      </button>
    </form>
  );
}
