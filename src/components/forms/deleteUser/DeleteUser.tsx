"use client";

// import { deleteUserService } from "@/services/auth";
import styles from "./DeleteUser.module.css";
import { useState } from "react";
import FormField from "@/components/ui/formField/FormField";
import CustomButton from "@/components/ui/button/Button";
import { useSession, signOut } from "next-auth/react";
import { deleteUserService } from "@/services/auth";

export default function DeleteUser() {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirm: "",
  });
  const [confirmError, setConfirmError] = useState("");
  const [responseError, setResponseError] = useState("");

  //* Handlers
  const handleShow = () => {
    setShow(!show);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setResponseError("");
    //* Check if password and confirm match
    if (name === "confirm" && value !== formData.password) {
      setConfirmError("Las contraseñas no coinciden");
    } else if (name === "password" && value !== formData.confirm) {
      setConfirmError("Las contraseñas no coinciden");
    } else {
      setConfirmError("");
    }
  };

  const handleDeleteUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      formData.password &&
      formData.confirm &&
      confirmError === "" &&
      status === "authenticated"
    ) {
      setIsLoading(true);
      try {
        const response = await deleteUserService({
          accessToken: session?.accessToken,
          password: formData.password,
        });
        const res = await response.json();
        console.log("RESPONSE", response);
        console.log("RES", res);
        if (response.status === 400) {
          setResponseError(res.message);
          return;
        }
        if (response.status === 200 || response.status === 201) {
            signOut();
        }
      } catch (err) {
        console.log("Error deleting user:", err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.error}>
        {responseError && <p>{responseError}</p>}
      </div>
      <div className={styles.loading}>
        {isLoading && <>Eliminando usuario...</>}
      </div>
      {!show ? (
        <span className={styles.delete} onClick={handleShow}>
          Eliminar usuario
        </span>
      ) : (
        <form onSubmit={handleDeleteUser}>
          <div className={styles.error}>
            {confirmError && formData.confirm && <p>{confirmError}</p>}
          </div>
          <FormField
            label="Contraseña"
            type="password"
            name="password"
            placeholder="******"
            value={formData.password}
            handleChange={handleChange}
          />
          <FormField
            label="Confirmar contraseña"
            type="password"
            name="confirm"
            placeholder="******"
            value={formData.confirm}
            handleChange={handleChange}
          />
          <CustomButton stroked={false} variant="large">
            Eliminar usuario
          </CustomButton>
        </form>
      )}
    </div>
  );
}
