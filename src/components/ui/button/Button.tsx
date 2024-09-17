import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  stroked?: boolean;
  variant: "small" | "large";
  disabled?: boolean;
  href?: string;
}

export default function Button({
  children,
  stroked,
  variant,
  disabled,
  href,
}: ButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        className={`${styles.button} ${
          stroked ? styles.stroked : styles.default
        }
        ${variant === "small" ? styles.small : ""}
        ${variant === "large" ? styles.large : ""}
        `}
      >
        {children}
      </Link>
    );
  }

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
