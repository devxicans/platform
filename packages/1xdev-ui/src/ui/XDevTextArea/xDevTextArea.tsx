"use client";
import styles from "./xDevTextArea.module.scss";
import { UiIcon, UiIconProps } from "@uireact/icons";

type inputProps = {
  label: string;
  id: string;
  icon: UiIconProps["icon"];
  value?: string;
  name?: string;
  maxLength?: number;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const XDevTextArea = ({
  label,
  id,
  icon,
  value,
  name,
  maxLength,
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
          <textarea
            id={id}
            value={value}
            name={name}
            className={styles.textArea}
            placeholder=""
            onChange={onChange}
            maxLength={maxLength}
          />
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        </div>
      </div>
    </div>
  );
};
