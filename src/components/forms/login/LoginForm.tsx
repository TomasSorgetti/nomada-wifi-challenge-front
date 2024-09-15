"use client";
import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import FormField from "@/components/ui/formField/FormField";
import Button from "@/components/ui/button/Button";
import GoogleButton from "@/components/ui/googleButton/GoogleButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authService } from "@/services/auth";
export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [dataError, setDataError] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  //TODO cambiar a redux para guardar el user
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const condition = data.email && data.password;
    if (condition) {
      setIsLoading(true);
      try {
        const response = await authService("login", {
          email: data.email,
          password: data.password,
        });
        const payload = await response.json();
        if (response.status !== 201) {
          setDataError(payload.message);
        }
        if (response.status === 201) {
          localStorage.setItem("token", payload.accessToken);
          router.push("/");
        }
      } catch (error) {
        console.log("Error register form", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Iniciar Sesión</h1>
      {dataError && <p>{dataError}</p>}
      {isLoading && <p>Enviando...</p>}
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
        ¿Todavía no tienes una cuenta? <Link href="/register">Registrarse</Link>
      </p>
      <div className={styles.divider}></div>
      <GoogleButton>Continuar con Google</GoogleButton>
      <p className={styles.forgotPassword}>
        ¿Olvidaste tu contraseña? <a href="#">Cambiar contraseña</a>
      </p>
    </form>
  );
}
