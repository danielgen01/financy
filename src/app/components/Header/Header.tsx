/* eslint-disable no-nested-ternary */

"use client"

import { faBell } from "@fortawesome/free-regular-svg-icons"
import { faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Avatar,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import React, { useEffect, useState } from "react"

import { logOut } from "@/app/utils/auth"
import { useAuth } from "@/app/utils/useAuth"

import LogoDark from "../../../../public/Logo-dark.png"
import LogoLight from "../../../../public/Logo-light.png"
import { Logo } from "../Logo/Logo"
import { MuiSkeleton } from "../MuiSkeleton/MuiSkeleton"
import { ThemeToggler } from "../ToggleThemeButton/ToggleThemeButton"
import styles from "./Header.styles.module.css"
import MenuItem from "./MenuItem"

export const NavigiationItems: React.FC = () => {
  return (
    <ul className={styles.StyledMenuList}>
      <MenuItem href="/dashboard" label="Dashboard" />
      <MenuItem href="/" label="Transactions" />
      <MenuItem href="/" label="Analytics" />
      <MenuItem href="/" label="Accounts" />
      <MenuItem href="/" label="Wallet" />
    </ul>
  )
}

const DefaultHeader: React.FC = () => {
  const { user, loading } = useAuth()
  const [openUserDialog, setOpenUserDialog] = useState(false)
  const { theme } = useTheme()
  const [loadedTheme, setLoadedTheme] = useState<string | undefined>("system")

  useEffect(() => {
    setLoadedTheme(theme)
  }, [theme])

  const logoSrc = loadedTheme === "dark" ? LogoDark : LogoLight

  const UserActionModal: React.FC<{ isOpen: boolean; setOpenDialog: any }> = ({
    isOpen,
    setOpenDialog,
  }) => {
    const router = useRouter()
    return (
      <Dialog
        open={isOpen}
        onClose={() => {
          setOpenDialog(false)
        }}
        className={styles.StyledUserActionModal}
      >
        <DialogTitle>User Actions</DialogTitle>
        <List sx={{ pt: 0 }}>
          <ListItem>
            <ListItemButton
              className={styles.StyledLogoutButton}
              onClick={() => {
                logOut()
                setOpenDialog(false)
                router.push("/")
              }}
            >
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Dialog>
    )
  }

  const router = useRouter()

  return (
    <div className={styles.StyledHeaderWrapper}>
      <Logo logoSrc={logoSrc} />
      <NavigiationItems />
      <div className={styles.StyledAccountActionsWrapper}>
        {!loading ? (
          <ThemeToggler />
        ) : (
          <MuiSkeleton variant="circular" width={50} height={50} />
        )}
        {!loading ? (
          <button className="header-action-icon" type="button">
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
          <button className="header-action-icon" type="button">
            <FontAwesomeIcon
              icon={faBell}
              fontVariant="classic"
              width={40}
              height={40}
              cursor="pointer"
              size="2x"
            />
          </button>
        ) : (
          <MuiSkeleton variant="circular" width={50} height={50} />
        )}
        <button
          className={styles.StyledAccountButtonWrapper}
          type="button"
          onClick={() => {
            setOpenUserDialog(!openUserDialog)
          }}
        >
          {!loading ? (
            user ? (
              <Avatar
                src={user.photoURL || ""}
                alt="Profile Image"
                className={styles.StyledAccountProfileImage}
              />
            ) : (
              <Avatar onClick={() => router.push("/auth")} />
            )
          ) : (
            <MuiSkeleton variant="circular" width={50} height={50} />
          )}
        </button>
      </div>
      {openUserDialog && user && (
        <UserActionModal
          isOpen={openUserDialog}
          setOpenDialog={() => setOpenUserDialog(!openUserDialog)}
        />
      )}
    </div>
  )
}

export const Header = () => {
  return <DefaultHeader />
}
