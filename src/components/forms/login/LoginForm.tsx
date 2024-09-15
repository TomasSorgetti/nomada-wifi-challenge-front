"use client";
import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import FormField from "@/components/ui/formField/FormField";
import Button from "@/components/ui/button/Button";
export default function LoginForm() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  return (
    <form className={styles.form}>
      <FormField
        label="Email:"
        name="email"
        placeholder="johndoe@gmail.com"
        value={data.email}
        handleChange={handleChange}
      />
      <FormField
        label="Contraseña:"
        name="password"
        placeholder="********"
        value={data.password}
        handleChange={handleChange}
      />
      <Button stroked={true} variant="large">
        Iniciar Sesión
      </Button>
    </form>
  );
}
