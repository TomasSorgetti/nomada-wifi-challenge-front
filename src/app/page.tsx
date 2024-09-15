import MainNavbar from "@/components/layout/mainNavbar/MainNavbar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <MainNavbar />
      <main className={styles.main}>
        <h1>Todas las opciones</h1>
        {/* carrousel1     */}
        <h2>Opciones en California</h2>
        {/* carrousel2     */}
      </main>
    </div>
  );
}
