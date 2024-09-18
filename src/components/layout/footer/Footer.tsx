"use client";

import Link from "next/link";
import styles from "./Footer.module.css";
import { usePathname } from "next/navigation";
import { MdHomeFilled } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className={styles.footer}>
      <Link
        href="/calendar"
        className={pathname === "/calendar" ? styles.active : ""}
      >
        <IoCalendarOutline size={24} />
        Calendario
      </Link>
      <Link href="/" className={pathname === "/" ? styles.active : ""}>
        <MdHomeFilled size={24} />
        Inicio
      </Link>
      <Link href="/chat" className={pathname === "/chat" ? styles.active : ""}>
        <HiOutlineChatBubbleOvalLeft size={24} />
        Chat
      </Link>
    </footer>
  );
}
