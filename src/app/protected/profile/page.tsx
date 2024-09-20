"use client";

import styles from "./page.module.css";
import SecondaryNavbar from "@/components/layout/secondaryNavbar/SecondaryNavbar";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import ProgressBar from "@/components/ui/progressBar/ProgressBar";
import DeleteUser from "@/components/forms/deleteUser/DeleteUser";

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

  return (
    <>
      <SecondaryNavbar />
      <ProgressBar loading={status === "loading" || isLoading} />
      <main className={styles.main}>
        <h1>Perfil de usuario</h1>
        <div className={styles.infoContainer}>
          {isLoading ? (
            <div>Cargando...</div>
          ) : (
            <>
              <p>email: {userData?.email}</p>
              <p>id: {userData?.id}</p>
              <p>rol: {userData?.roles.name}</p>
              <DeleteUser />
            </>
          )}
        </div>
      </main>
    </>
  );
}
