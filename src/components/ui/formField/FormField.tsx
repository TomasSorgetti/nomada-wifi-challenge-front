import styles from "./FormField.module.css";

interface FormFieldProps {
  type: string;
  label: string;
  name: string;
  placeholder: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export default function FormField({
  type,
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
        type={type}
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
