import Image from "next/image";
import styles from "./GoogleButton.module.css";
import googleIcon from "../../../assets/icons/google_icon.png";
export default function GoogleButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className={styles.button}>
      <Image src={googleIcon} alt="Google icon" />
      {children}
    </span>
  );
}
