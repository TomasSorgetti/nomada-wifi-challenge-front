"use client";

import styles from "./AuthIcons.module.css";
import React from "react";
import Image from "next/image";
import BellIcon from "@/assets/icons/bell.svg";
import UserIcon from "@/assets/icons/user.svg";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AuthIcons() {
  //* Variables and Hooks
  const router = useRouter();
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  //* Handlers
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //* Render component
  return (
    <div className={styles.container}>
      <Image src={BellIcon} alt="Bell icon" />
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Image src={UserIcon} alt="User icon" />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {session ? (
            <div>
              <MenuItem
                onClick={() => {
                  handleClose();
                  router.push("/protected/profile");
                }}
              >
                Perfil
              </MenuItem>
              <MenuItem
                onClick={() => {
                  signOut();
                  handleClose();
                }}
              >
                Logout
              </MenuItem>
            </div>
          ) : (
            <div>
              <MenuItem
                onClick={() => {
                  signIn();
                  handleClose();
                }}
              >
                Iniciar Sesión
              </MenuItem>
              <MenuItem onClick={handleClose}>Registrarse</MenuItem>
            </div>
          )}
        </Menu>
      </div>
    </div>
  );
}
