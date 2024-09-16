"use client";
import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import FormField from "@/components/ui/formField/FormField";
import Button from "@/components/ui/button/Button";
import GoogleButton from "@/components/ui/googleButton/GoogleButton";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  //* States
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [dataError, setDataError] = useState("");

  //* Handles
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (data.email && data.password) {
      setIsLoading(true);
      try {
        const responseNextAuth = await signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        });
        console.log(responseNextAuth);

        if (responseNextAuth?.error) {
          setDataError(responseNextAuth.error);
          return;
        }
        router.push("/");
      } catch (error) {
        console.log("Error register form", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      {/* {isLoading && <p>Enviando...</p>} */}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formHeader}>
          <h1>Iniciar Sesión</h1>
          <span>{dataError}</span>
        </div>
        <>
          <FormField
            type="email"
            label="Email:"
            name="email"
            placeholder="johndoe@gmail.com"
            value={data.email}
            handleChange={handleChange}
          />
          <FormField
            type="password"
            label="Contraseña:"
            name="password"
            placeholder="********"
            value={data.password}
            handleChange={handleChange}
          />
        </>
        <div className={styles.rememberMe}>
          <input type="checkbox" name="persist" id="persist" />
          <label htmlFor="persist">Recordarme</label>
        </div>
        <Button stroked={true} variant="large" disabled={isLoading}>
          Iniciar Sesión
        </Button>
        <p className={styles.register}>
          ¿Todavía no tienes una cuenta?{" "}
          <Link href="/register">Registrarse</Link>
        </p>
        <div className={styles.divider}></div>
        <GoogleButton>Continuar con Google</GoogleButton>
        <p className={styles.forgotPassword}>
          ¿Olvidaste tu contraseña? <a href="#">Cambiar contraseña</a>
        </p>
      </form>
    </>
  );
}
