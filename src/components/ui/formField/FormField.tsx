import styles from "./FormField.module.css";

interface FormFieldProps {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export default function FormField({
  label,
  name,
  placeholder,
  value,
  handleChange,
  error,
}: FormFieldProps) {
  return (
    <div className={`${styles.formField} ${error ? styles.errorField : ""}`}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
