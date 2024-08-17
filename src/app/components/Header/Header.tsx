"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import MenuItem from "./MenuItem";
import { faBell, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.styles.module.css"; // Ensure path is correct
import Link from "next/link";
import { Skeleton, useMediaQuery } from "@mui/material";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { ToggleTheme } from "../ToggleThemeButton/ToggleThemeButton";
import { logOut } from "@/app/utils/auth";
import { useAuth } from "@/app/utils/useAuth";

const Header: React.FC = () => {
  const isLaptopOrAbove = useMediaQuery("(min-width: 1280px)");
  const { user, loading } = useAuth();

  const handleLogOut = () => {
    logOut();
    console.log("user logged out");
    window.location.reload();
  };

  return (
    <div className={styles.StyledHeaderWrapper}>
      <Link href="/">
        <Image src="/Logo.png" alt="Logo_Financy" width={150} height={50} />
      </Link>
      {isLaptopOrAbove ? (
        <>
          <>
            <ul className={styles.StyledMenuList}>
              <MenuItem href="/" label="Overview" isActive={true} />
              <MenuItem href="/" label="Transactions" />
              <MenuItem href="/" label="Analytics" />
              <MenuItem href="/" label="Accounts" />
              <MenuItem href="/" label="Wallet" />
            </ul>
            <ToggleTheme />
            <div className={styles.StyledAccountActionsWrapper}>
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
                <div className="flex mx-auto overflow-hidden">
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
                <button
                  onClick={handleLogOut}
                  className={styles.StyledLogoutButton}
                >
                  Logout
                </button>
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
          </>
        </>
      ) : (
        !loading && <HamburgerMenu />
      )}
    </div>
  );
};

export default Header;
