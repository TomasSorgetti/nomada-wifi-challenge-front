import styles from "./page.module.css";
import RegisterForm from "@/components/forms/register/RegisterForm";
import SecondaryNavbar from "@/components/layout/secondaryNavbar/SecondaryNavbar";

export default function Regster() {
  return (
    <>
      <SecondaryNavbar />
      <main className={styles.main}>
        <RegisterForm />
      </main>
    </>
  );
}
