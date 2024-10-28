"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import MenuItem from "./MenuItem";
import { faBell, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.styles.module.css";
import Link from "next/link";
import {
  Avatar,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { ThemeToggler } from "../ToggleThemeButton/ToggleThemeButton";
import { logOut } from "@/app/utils/auth";
import { useAuth } from "@/app/utils/useAuth";
import { useTheme } from "next-themes";
import MuiSkeleton from "../MuiSkeleton/MuiSkeleton";
import LogoDark from "../../../../public/Logo-dark.png";
import LogoLight from "../../../../public/Logo-light.png";

const Header: React.FC = () => {
  const { user, loading } = useAuth();
  const [openUserDialog, setOpenUserDialog] = useState(false);
  let { theme } = useTheme();
  const [loadedTheme, setLoadedTheme] = useState<string | undefined>("system");

  useEffect(() => {
    setLoadedTheme(theme);
  }, [theme]);

  const logoSrc = loadedTheme === "dark" ? LogoDark : LogoLight;

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
        <Image
          src={logoSrc}
          alt="Logo_Financy"
          width={150}
          height={40}
          placeholder="blur"
        />
      </Link>
      <>
        <>
          <ul className={styles.StyledMenuList}>
            <MenuItem href="/overview" label="Overview" isActive={true} />
            <MenuItem href="/" label="Transactions" />
            <MenuItem href="/" label="Analytics" />
            <MenuItem href="/" label="Accounts" />
            <MenuItem href="/" label="Wallet" />
          </ul>
          <div className={styles.StyledAccountActionsWrapper}>
            {!loading ? (
              <ThemeToggler />
            ) : (
              <MuiSkeleton variant="circular" width={50} height={50} />
            )}
            {!loading ? (
              <button className="header-action-icon">
                <FontAwesomeIcon
                  icon={faGear}
                  width={40}
                  height={40}
                  cursor="pointer"
                  size="2x"
                />
              </button>
            ) : (
              <MuiSkeleton variant="circular" width={50} height={50} />
            )}
            {!loading ? (
              <button className="header-action-icon">
                <FontAwesomeIcon
                  icon={faBell}
                  width={40}
                  height={40}
                  cursor="pointer"
                  size="2x"
                />
              </button>
            ) : (
              <MuiSkeleton variant="circular" width={50} height={50} />
            )}
            <>
              <div
                onClick={() => {
                  setOpenUserDialog(true);
                }}
              >
                {!loading && user ? (
                  <Avatar
                    src="/Profile.png"
                    alt="Profile Image"
                    className={styles.StyledAccountProfileImage}
                  />
                ) : (
                  <MuiSkeleton variant="circular" width={50} height={50} />
                )}
              </div>
            </>
            <>
              {!user && !loading && (
                <>
                  <Link className={styles.StyledLink} href="./signup">
                    Registrieren
                  </Link>
                  <Link className={styles.StyledLink} href="./signin">
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
