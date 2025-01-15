"use client";
import React, { useState } from "react";
import styles from "./xDevTextArea.module.scss";
import { UiIcon, UiIconProps } from "@uireact/icons";

type InputProps = {
  label: string;
  id: string;
  icon: UiIconProps["icon"];
  name?: string;
  maxLength?: number;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const XDevTextArea = ({
  label,
  id,
  icon,
  name,
  maxLength = 500,
  onChange,
}: InputProps) => {
  const [value, setValue] = useState("");
  const [charCount, setCharCount] = useState(maxLength);
  const maxLengthValue = maxLength
  
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    setCharCount(maxLengthValue - newValue.length);

    if (onChange) {
      onChange(event);
    }
  };

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
            name={name}
            className={styles.textArea}
            placeholder="."
            value={value}
            onChange={handleChange}
            maxLength={maxLength}
          />
          {maxLength && (
            <span
              data-testid="charCounter"
              className={charCount === 0 ? styles.characterMax : styles.characterCount}
            >
              {charCount}
            </span>
          )}
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        </div>
      </div>
    </div>
  );
};
