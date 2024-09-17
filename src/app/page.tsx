import MainNavbar from "@/components/layout/mainNavbar/MainNavbar";
import styles from "./page.module.css";
import Breweries from "@/components/layout/breweries/Breweries";
import Toast from "@/components/ui/toast/Toast";

export default function Home() {
  return (
    <div className={styles.page}>
      <MainNavbar />
      <main className={styles.main}>
        <Toast />
        <div className={styles.wrapper}>
          <Breweries />
        </div>
      </main>
    </div>
  );
}
