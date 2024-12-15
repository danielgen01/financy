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
import type { StaticImageData } from "next/image"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import React, { useEffect, useState } from "react"

import { logOut } from "@/app/utils/auth"
import { useAuth } from "@/app/utils/useAuth"

import LogoDark from "../../../../public/Logo-dark.png"
import LogoLight from "../../../../public/Logo-light.png"
import { MuiSkeleton } from "../MuiSkeleton/MuiSkeleton"
import { ThemeToggler } from "../ToggleThemeButton/ToggleThemeButton"
import styles from "./Header.styles.module.css"
import MenuItem from "./MenuItem"

const Logo: React.FC<{ logoSrc: StaticImageData }> = ({ logoSrc }) => {
  return (
    <Link
      href="/"
      style={{
        display: "flex",
        alignItems: "center",
        gap: ".5rem",
        fontWeight: "bold",
      }}
    >
      <Image src={logoSrc} alt="Logo_Financy" />
    </Link>
  )
}

const NavigiationItems = () => {
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

const Header: React.FC = () => {
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
    return (
      <Dialog
        open={isOpen}
        onClose={() => {
          setOpenDialog(false)
        }}
      >
        <DialogTitle>User Actions</DialogTitle>
        <List sx={{ pt: 0 }}>
          <ListItem>
            <ListItemButton
              className={styles.StyledLogoutButton}
              onClick={() => {
                logOut()
                setOpenDialog(false)
                window.location.reload()
              }}
            >
              <ListItemText primary="Logout bra" />
            </ListItemButton>
          </ListItem>
        </List>
      </Dialog>
    )
  }

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
            setOpenUserDialog(true)
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
        </button>
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
      </div>
      <UserActionModal
        isOpen={openUserDialog}
        setOpenDialog={setOpenUserDialog}
      />
      {/* <HamburgerMenu /> */}
    </div>
  )
}

export default Header
