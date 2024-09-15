import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  stroked?: boolean;
  variant: "small" | "large";
  disabled?: boolean;
}

export default function Button({
  children,
  stroked,
  variant,
  disabled,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`${styles.button} ${stroked ? styles.stroked : styles.default}
      ${variant === "small" ? styles.small : ""}
      ${variant === "large" ? styles.large : ""}
      `}
    >
      {children}
    </button>
  );
}
