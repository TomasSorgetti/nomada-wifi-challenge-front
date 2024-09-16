import styles from "./page.module.css";
import RegisterForm from "@/components/forms/register/RegisterForm";

export default function Regster() {
  return (
    <>
      <main className={styles.main}>
        <RegisterForm />
      </main>
    </>
  );
}
