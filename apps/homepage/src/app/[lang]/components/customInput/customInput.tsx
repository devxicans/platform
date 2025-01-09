import styles from "./customInput.module.scss";

type inputProps = {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  value?: string;
  name?: string;
};

export const CustomInput = ({
  label,
  type,
  id,
  placeholder,
  value,
  name,
}: inputProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div className={styles.inputContainer}>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          name={name}
          className={styles.input}
        />
      </div>
    </div>
  );
};
