"use client";

import SecondaryNavbar from "@/components/layout/secondaryNavbar/SecondaryNavbar";
import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();
  const user = session?.user?.user;
  return (
    <>
      <SecondaryNavbar />
      <main>
        <h1>Hola</h1>
        <p>Tu email es {user?.email}</p>
        <p>Tu rol es de {user?.roles.name}</p>
      </main>
    </>
  );
}
