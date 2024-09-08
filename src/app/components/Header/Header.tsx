"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import MenuItem from "./MenuItem";
import { faBell, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.styles.module.css"; // Ensure path is correct
import Link from "next/link";
import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Modal,
  Skeleton,
  useMediaQuery,
} from "@mui/material";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { ThemeToggler } from "../ToggleThemeButton/ToggleThemeButton";
import { logOut } from "@/app/utils/auth";
import { useAuth } from "@/app/utils/useAuth";
import { useTheme } from "next-themes";

const Header: React.FC = () => {
  const { user, loading } = useAuth();
  const [openUserDialog, setOpenUserDialog] = useState(false);
  const { theme } = useTheme();

  const UserActionModal: React.FC<{ isOpen: boolean; setOpenDialog: any }> = ({
    isOpen,
    setOpenDialog,
  }) => {
    return (
      <Dialog
        open={isOpen}
        onClose={() => {
          setOpenDialog(false);
        }}
      >
        <DialogTitle>User Actions</DialogTitle>
        <List sx={{ pt: 0 }}>
          <ListItem>
            <ListItemButton
              className={styles.StyledLogoutButton}
              onClick={() => {
                logOut();
                setOpenDialog(false);
                window.location.reload();
              }}
            >
              <ListItemText primary="Logout bra" />
            </ListItemButton>
          </ListItem>
        </List>
      </Dialog>
    );
  };

  return (
    <div className={styles.StyledHeaderWrapper}>
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: ".5rem",
          fontWeight: "bold",
        }}
      >
        {theme === "light" ? (
          <Image
            src="/Logo-light.png"
            alt="Logo_Financy"
            width={150}
            height={50}
          />
        ) : (
          <Image
            src="/Logo-dark.png"
            alt="Logo_Financy"
            width={150}
            height={50}
          />
        )}
      </Link>
      <>
        <>
          <ul className={styles.StyledMenuList}>
            <MenuItem href="/" label="Overview" isActive={true} />
            <MenuItem href="/" label="Transactions" />
            <MenuItem href="/" label="Analytics" />
            <MenuItem href="/" label="Accounts" />
            <MenuItem href="/" label="Wallet" />
          </ul>
          <div className={styles.StyledAccountActionsWrapper}>
            {!loading ? (
              <ThemeToggler />
            ) : (
              <Skeleton variant="circular" width={40} height={40} />
            )}
            {!loading ? (
              <FontAwesomeIcon
                icon={faGear}
                width={40}
                height={40}
                cursor="pointer"
              />
            ) : (
              <Skeleton variant="circular" width={40} height={40} />
            )}
            {!loading ? (
              <FontAwesomeIcon
                icon={faBell}
                width={40}
                height={40}
                cursor="pointer"
              />
            ) : (
              <Skeleton variant="circular" width={40} height={40} />
            )}
            <>
              <div
                className="flex mx-auto overflow-hidden"
                onClick={() => {
                  setOpenUserDialog(true);
                }}
              >
                {!loading && user ? (
                  <Image
                    src="/Profile.png"
                    height={40}
                    width={40}
                    alt="Profile Image"
                    className={styles.StyledAccountProfileImage}
                  />
                ) : (
                  <Skeleton variant="circular" width={40} height={40} />
                )}
              </div>
            </>
            <>
              {!user && !loading && (
                <>
                  <Link
                    className="shadow-sm p-2 rounded-xl bg-green-300"
                    href="./signup"
                  >
                    Registrieren
                  </Link>
                  <Link
                    className="shadow-sm p-2 rounded-xl bg-green-300"
                    href="./signin"
                  >
                    Anmelden
                  </Link>
                </>
              )}
            </>
          </div>
          <UserActionModal
            isOpen={openUserDialog}
            setOpenDialog={setOpenUserDialog}
          />
        </>
      </>
      <HamburgerMenu />
    </div>
  );
};

export default Header;
