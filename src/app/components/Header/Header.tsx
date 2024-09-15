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

const Header: React.FC = () => {
  const { user, loading } = useAuth();
  const [openUserDialog, setOpenUserDialog] = useState(false);
  let { theme } = useTheme();
  const [loadedTheme, setLoadedTheme] = useState<string | undefined>("system");

  useEffect(() => {
    setLoadedTheme(theme);
  }, [theme]);

  const logoSrc = loadedTheme === "dark" ? "/Logo-dark.png" : "/Logo-light.png";

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
          blurDataURL={
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHLSURBVHgB7VVBTsJAFP2/uJAAiUeoN2ABCUt6A0kgQXacQFwo7ii7GhfACXRHDRi8QWFnAgQO4KJHYCG4gX5nGhBJkc6UjYl9iybtvN/3Z96bGYAQIf47UIRUKlhJh3ACkiCi1vOLVoFjGigWLRVWaAGBCjJAsM1O9tyPpvgRaIm9IOIQIU2EerCBYn5QY0uUBFkQlU1Ts0WovzZQKgyu2J90kFevm12tL8remwHuOy5xQgBnIAFEeG13sjmpmn3iQUPHfX9XMyqQY4mUEFDLYwGusCErzmYx4+K2mgEk51GsBqfj+3hlpwEeOiK4AGkw31noVmzmzDbVj83E7Qiia5WyFbeyQUPX7mrNVHXREBF34Ti5NyNqfzfg+o4otHQ70gBTlng9XV3wHVMRKkKoDx/i083rifsMGDqMUC5985FkYWqKlPDQjY24/vObcpkfSIfOLQTK8dCBwk5KoX7RTkRjuvf7EUhX5/ys8D0p16HTNr7vjgkidTuvMbYOQYCONjIS/b1DIADXZ0X+Ol4r1EeGd+m3wz7I3H2qovvb83OEp6ERKx/inIAPmHgvkDjzPXYavfbjHbyO14eL9HW8CV1fxxmECBHir+MLosyshh2ygb4AAAAASUVORK5CYII="
          }
        />
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
              <MuiSkeleton variant="circular" width={40} height={40} />
            )}
            {!loading ? (
              <button className="header-action-icon">
                <FontAwesomeIcon
                  icon={faGear}
                  width={40}
                  height={40}
                  cursor="pointer"
                  size="lg"
                />
              </button>
            ) : (
              <MuiSkeleton variant="circular" width={40} height={40} />
            )}
            {!loading ? (
              <button className="header-action-icon">
                <FontAwesomeIcon
                  icon={faBell}
                  width={40}
                  height={40}
                  cursor="pointer"
                  size="lg"
                />
              </button>
            ) : (
              <MuiSkeleton variant="circular" width={40} height={40} />
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
                  <MuiSkeleton variant="circular" width={40} height={40} />
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
