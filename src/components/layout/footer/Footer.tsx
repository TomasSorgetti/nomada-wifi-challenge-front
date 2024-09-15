"use client";

import Link from "next/link";
import styles from "./Footer.module.css";
import HomeIcon from "@mui/icons-material/Home";
import Image from "next/image";
import calendarIcon from "../../../assets/icons/calendar.svg";
import chatIcon from "../../../assets/icons/chat.svg";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className={styles.footer}>
      <Link
        href="/calendar"
        className={pathname === "/calendar" ? styles.active : ""}
      >
        <Image src={calendarIcon} alt="Calendar icon" />
        Calendario
      </Link>
      <Link href="/" className={pathname === "/" ? styles.active : ""}>
        <HomeIcon sx={{ fontSize: 24 }} />
        Inicio
      </Link>
      <Link href="/chat" className={pathname === "/chat" ? styles.active : ""}>
        <Image src={chatIcon} alt="Chat icon" />
        Chat
      </Link>
    </footer>
  );
}
