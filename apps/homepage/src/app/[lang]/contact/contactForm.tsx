"use client";
import { CustomInput } from "@1xdev/ui";
import { CustomTextArea } from "@1xdev/ui";
import styles from "./contactForm.module.scss";
import { useLocalization } from "../../../lib/context/loc-context";
import { UiValidator, UiValidatorErrors } from "@uireact/validator";
import { useState } from "react";

const validator = new UiValidator();

export function ContactForm() {
  const loc = useLocalization();

  const schema = {
    name: validator.field("text").present(loc.nameInputError),
    email: validator.field("email",loc.emailInputError2).present(loc.emailInputError1),
    phone: validator.field("numeric").present(loc.phoneInputError1).length(10,12,loc.phoneInputError2),
    message: validator
      .field("text")
      .present(loc.messageInputError)
      .length(0, 500),
  };

  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<UiValidatorErrors>();

  const handleChangeInputs = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactInfo({
      ...contactInfo,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const { name, email, phone, message } = contactInfo;

    const newContact = {
      name,
      email,
      phone,
      message,
    };

    const result = validator.validate(schema, newContact);

    if (!result.passed) {
      setErrors(result.errors);
      console.log(result.errors);
      return;
    }
    console.log("No errors");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>{loc.contactFormTitle}</h2>
      <div className={styles.inputContainer}>
        <CustomInput
          type="text"
          name="name"
          id="name-input"
          label={loc.nameInput}
          icon="UserSimple"
          value={contactInfo.name}
          onChange={handleChangeInputs}
        />
        {errors?.name && (
          <span className={styles.error}>{errors?.name?.[0].message} </span>
        )}
      </div>
      <div className={styles.inputContainer}>
        <CustomInput
          type="text"
          name="email"
          id="email-input"
          label={loc.emailInput}
          icon="Mail"
          value={contactInfo.email}
          onChange={handleChangeInputs}
        />
        {errors?.email?.map((error, index) => (
          <span key={`Error-message-${index}`} className={styles.error}>
            {error.message}{" "}
          </span>
        ))}
      </div>
      <div className={styles.inputContainer}>
        <CustomInput
          type="number"
          name="phone"
          id="phone-input"
          label={loc.phoneInput}
          icon="CirclePhone"
          value={contactInfo.phone}
          onChange={handleChangeInputs}
        />
        {errors?.phone && (
          <span className={styles.error}>{errors?.phone?.[0].message} </span>
        )}
      </div>
      <div className={styles.inputContainer}>
        <CustomTextArea
          name="message"
          id="message-area"
          label={loc.messageInput}
          icon="Send"
          value={contactInfo.message}
          onChange={handleChangeInputs}
        />
        {errors?.message && (
          <span className={styles.error}>{errors?.message?.[0].message} </span>
        )}
      </div>
      <button type="submit" className={styles.btn}>
        {loc.submitBtn}
      </button>
    </form>
  );
}
