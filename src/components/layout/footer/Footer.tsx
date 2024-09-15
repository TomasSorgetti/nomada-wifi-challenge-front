import Link from "next/link";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/calendar">Calendario</Link>
      <Link href="/">Inicio</Link>
      <Link href="/chat">Chat</Link>
    </footer>
  );
}
