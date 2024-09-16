import Link from "next/link";
import styles from "./LinkedButton.module.css";

interface ButtonProps {
  children: React.ReactNode;
  stroked?: boolean;
  variant: "small" | "large";
  obdbId?: string;
}

export default function LinkedButton({
  children,
  stroked,
  variant,
  obdbId,
}: ButtonProps) {
  return (
    <Link
      href={`/breweries/${obdbId}`}
      className={`${styles.button} ${stroked ? styles.stroked : styles.default}
      ${variant === "small" ? styles.small : ""}
      ${variant === "large" ? styles.large : ""}
      `}
    >
      {children}
    </Link>
  );
}
