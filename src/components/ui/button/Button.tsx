import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  stroked?: boolean;
  variant: "small" | "large";
}

export default function Button({ children, stroked, variant }: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${stroked ? styles.stroked : styles.default}
      ${variant === "small" ? styles.small : ""}
      ${variant === "large" ? styles.large : ""}
      `}
    >
      {children}
    </button>
  );
}
