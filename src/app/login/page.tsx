import LoginForm from "@/components/forms/login/LoginForm";
import styles from "./page.module.css";
import SecondaryNavbar from "@/components/layout/secondaryNavbar/SecondaryNavbar";

export default function Login() {
  return (
    <>
      <SecondaryNavbar />
      <main className={styles.main}>
        <LoginForm />
      </main>
    </>
  );
}
