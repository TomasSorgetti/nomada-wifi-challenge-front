"use client";
import Link from "next/link";
import styles from "./MainNavbar.module.css";
import AuthIcons from "@/components/ui/authIcons/AuthIcons";
import { useState } from "react";

export default function MainNavbar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <header className={styles.header}>
      <nav>
        <div
          onClick={handleToggle}
          className={`${styles.hamburger} ${open ? styles.active : ""}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`${styles.menu} ${open ? styles.open : ""}`}>
          <li>
            <Link onClick={handleClose} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={handleClose} href="/calendar">
              Calendario
            </Link>
          </li>
          <li>
            <Link onClick={handleClose} href="/chat">
              Chat
            </Link>
          </li>
        </ul>
        <AuthIcons />
      </nav>
    </header>
  );
}
