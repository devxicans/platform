"use client";
import styles from "./xDevInput.module.scss";
import { UiIcon, UiIconProps } from "@uireact/icons";

type inputProps = {
  label: string;
  type: string;
  id: string;
  icon: UiIconProps["icon"];
  value?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const XDevInput = ({
  label,
  type,
  id,
  icon,
  value,
  name,
  onChange,
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
          <input
            type={type}
            id={id}
            value={value}
            name={name}
            className={styles.input}
            placeholder=""
            onChange={onChange}
          />
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        </div>
      </div>
    </div>
  );
};
