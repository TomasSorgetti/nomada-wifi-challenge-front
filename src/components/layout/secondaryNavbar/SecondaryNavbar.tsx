"use client";
import AuthIcons from "@/components/ui/authIcons/AuthIcons";
import styles from "./SecondaryNavbar.module.css";
import ArrowLeft from "@/assets/icons/arrow_left.svg";
import Image from "next/image";
export default function SecondaryNavbar() {
  return (
    <header className={styles.header}>
      <nav>
        <button onClick={() => window.history.back()} className={styles.button}>
          <Image src={ArrowLeft} alt="Arrow left icon" />
        </button>
        <AuthIcons />
      </nav>
    </header>
  );
}
