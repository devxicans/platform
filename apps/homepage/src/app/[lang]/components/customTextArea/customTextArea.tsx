"use client";
import styles from "./customTextArea.module.scss";
import { UiIcon, UiIconProps } from "@uireact/icons";

type inputProps = {
  label: string;
  id: string;
  icon: UiIconProps["icon"];
  value?: string;
  name?: string;
};

export const CustomTextArea = ({
  label,
  id,
  icon,
  value,
  name,
}: inputProps) => {
  return (
    <div>
      <div className={styles.inputContainer}>
        <div className={styles.inputBorder}>
          <UiIcon
            icon={icon}
            category="primary"
            className={styles.icon}
            coloration="dark"
          />
          <textarea
            id={id}
            value={value}
            name={name}
            className={styles.textArea}
            placeholder=""
          />
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        </div>
      </div>
    </div>
  );
};
