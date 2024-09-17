import Image from "next/image";
import styles from "./Toast.module.css";
import warningIcon from "../../../assets/icons/warning.svg";

export default function Toast() {
  return (
    <div className={styles.container}>
      <Image src={warningIcon} alt="warning alert icon" />
      <div className={styles.info}>
        <span className={styles.title}>Happy Hour</span>
        <p>
          16:00 - 17:00 hs <span>mex</span>
        </p>
      </div>
    </div>
  );
}
