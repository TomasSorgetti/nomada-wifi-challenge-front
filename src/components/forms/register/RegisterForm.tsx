"use client";

//* Imports
import React, { useState } from "react";
import styles from "./RegisterForm.module.css";
import FormField from "@/components/ui/formField/FormField";
import CustomButton from "@/components/ui/button/Button";
import GoogleButton from "@/components/ui/googleButton/GoogleButton";
import Link from "next/link";
import { authService } from "@/services/auth";
import { useRouter } from "next/navigation";
import ProgressBar from "@/components/ui/progressBar/ProgressBar";

//* Main function
export default function RegisterForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    confirm: "",
  });
  const [dataErrors, setDataErrors] = useState({
    email: "",
    password: "",
    confirm: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO agregar errores en la condicion y hacer validaciones
    const condition = data.email && data.password && data.confirm;
    if (condition) {
      setIsLoading(true);
      try {
        const response = await authService("register", {
          email: data.email,
          password: data.password,
        });
        // TODO sacar el console
        console.log(response);
        if (response.status === 400) {
          setDataErrors({
            ...dataErrors,
            email: "Email already in use",
          });
        }
        if (response.status === 201) {
          router.push("/login");
        }
      } catch (error) {
        console.log("Error register form", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <ProgressBar loading={isLoading} />
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Registrarse</h1>
        {isLoading && <p>Enviando...</p>}
        <>
          <FormField
            type="email"
            label="Email:"
            name="email"
            placeholder="johndoe@gmail.com"
            value={data.email}
            handleChange={handleChange}
            error={dataErrors.email}
          />
          <FormField
            type="password"
            label="Contraseña:"
            name="password"
            placeholder="********"
            value={data.password}
            handleChange={handleChange}
            error={dataErrors.password}
          />
          <FormField
            type="password"
            label="Confirmar contraseña:"
            name="confirm"
            placeholder="********"
            value={data.confirm}
            handleChange={handleChange}
            error={dataErrors.confirm}
          />
        </>
        <CustomButton stroked={false} variant="large" disabled={isLoading}>
          Registrarse
        </CustomButton>
        <p className={styles.login}>
          ¿Ya tienes una cuenta? <Link href="/login">Iniciar sesión</Link>
        </p>
        <div className={styles.divider}></div>
        <GoogleButton>Continuar con Google</GoogleButton>
      </form>
    </>
  );
}
