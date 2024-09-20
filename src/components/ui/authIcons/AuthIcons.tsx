"use client";

import styles from "./AuthIcons.module.css";
import React from "react";
import Image from "next/image";
import BellIcon from "@/assets/icons/bell.svg";
import { FaUserLarge } from "react-icons/fa6";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AuthIcons() {
  const router = useRouter();
  const { data: session } = useSession();
  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: "/login" });
  };
  return (
    <div className={styles.container}>
      <Image src={BellIcon} alt="Bell icon" />
      <div>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<FaUserLarge size={18} color="white" />}
            variant=""
          />
          <MenuList>
            {session ? (
              <div>
                <MenuItem
                  onClick={() => {
                    router.push("/protected/profile");
                  }}
                >
                  Perfil
                </MenuItem>
                <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
              </div>
            ) : (
              <div>
                <MenuItem
                  onClick={() => {
                    signIn();
                  }}
                >
                  Iniciar Sesión
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    router.push("/register");
                  }}
                >
                  Registrarse
                </MenuItem>
              </div>
            )}
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}
