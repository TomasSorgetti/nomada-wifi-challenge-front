"use client";

import SecondaryNavbar from "@/components/layout/secondaryNavbar/SecondaryNavbar";
import { deleteUserService } from "@/services/auth";
import { useSession } from "next-auth/react";
import { useState } from "react";
import ProgressBar from "@/components/ui/progressBar/ProgressBar";

export default function Profile() {
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();
  const user = session?.user?.user;

  //TODO PEDIR CONTRASEÑA PARA ELIMINAR
  const handleDeleteUser = async () => {
    if (confirm("Are you sure?")) {
      setIsLoading(true);
      try {
        const response = await deleteUserService({
          email: user.email,
          password: "admin",
        });
        console.log("DELETE USER RESPONSE", response);
      } catch (error) {
        console.log("Error deleting user", error);
      } finally {
        setIsLoading(false);
      }
    }
  };
  return (
    <>
      <SecondaryNavbar />
      <ProgressBar loading={isLoading} />
      <main>
        <h1>Hola</h1>
        <p>Tu email es {user?.email}</p>
        <p>Tu rol es de {user?.roles.name}</p>
        <button onClick={handleDeleteUser}>Delete user</button>
      </main>
    </>
  );
}
