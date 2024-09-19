"use client";

import SecondaryNavbar from "@/components/layout/secondaryNavbar/SecondaryNavbar";
import { deleteUserService } from "@/services/auth";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import ProgressBar from "@/components/ui/progressBar/ProgressBar";

export default function Profile() {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (status === "authenticated" && session?.accessToken) {
      const fetchUserProfile = async () => {
        try {
          setIsLoading(true);
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/me`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${session?.accessToken}`,
              },
            }
          );
          const data = await response.json();
          console.log("RESPONSE", data);

          setUserData(data);
        } catch (error) {
          console.error("Error fetching user profile:", error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchUserProfile();
    } else if (status === "unauthenticated") {
      setIsLoading(false);
    }
  }, [status, session?.accessToken]);

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

  console.log(userData);

  return (
    <>
      <SecondaryNavbar />
      <ProgressBar loading={status === "loading" || isLoading} />
      <main>
        <h1>Hola</h1>
        {/* <p>Tu email es {user?.email}</p>
        <p>Tu rol es de {user?.roles?.name}</p> */}
        <button onClick={handleDeleteUser}>Delete user</button>
      </main>
    </>
  );
}
