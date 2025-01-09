"use client"
import styles from "./customInput.module.scss";
import { UiIcon, UiIconProps } from "@uireact/icons";

type inputProps = {
  label: string;
  type: string;
  id: string;
  icon: UiIconProps["icon"];
  value?: string;
  name?: string;
};

export const CustomInput = ({
  label,
  type,
  id,
  icon,
  value,
  name,
}: inputProps) => {
  return (
    <div>
      <div className={styles.inputContainer}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <div className={styles.inputBorder}>
        <UiIcon icon={icon} category="primary" className={styles.icon} coloration="dark"/>
        <input
          type={type}
          id={id}
          value={value}
          name={name}
          className={styles.input}
        />
        </div>
      </div>
    </div>
  );
};
