import MainNavbar from "@/components/layout/mainNavbar/MainNavbar";
import styles from "./page.module.css";
import Breweries from "@/components/layout/breweries/Breweries";

export default function Home() {
  return (
    <div className={styles.page}>
      <MainNavbar />
      <main className={styles.main}>
        <Breweries />
      </main>
    </div>
  );
}
