import MainNavbar from "@/components/layout/mainNavbar/MainNavbar";
import styles from "./page.module.css";
import Breweries from "@/components/layout/breweries/Breweries";
import Toast from "@/components/ui/toast/Toast";
import BreweriesFiltered from "@/components/layout/breweriesFiltered/BreweriesFiltered";

export default function Home() {
  return (
    <div className={styles.page}>
      <MainNavbar />
      <main className={styles.main}>
        <Toast />
        <div className={styles.wrapper}>
          <h1>Todas las opciones</h1>
          <Breweries />
          <h2>Buscar cervecerías</h2>
          <BreweriesFiltered />
        </div>
      </main>
    </div>
  );
}
