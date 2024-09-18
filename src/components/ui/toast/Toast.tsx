import Image from "next/image";
import styles from "./Toast.module.css";
import warningIcon from "../../../assets/icons/warning.svg";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Toast() {
  return (
    <div className={`${styles.container} ${inter.className}`}>
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
