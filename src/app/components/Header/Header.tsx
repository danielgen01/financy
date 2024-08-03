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
  const { user } = useAuth();
  const [loading, setLoading] = useState<boolean>(true); // Add loading state

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

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
          {loading ? (
            <>
              {/* Render skeleton or loading indicator while fetching data */}
              <Skeleton variant="rectangular" width={100} height={40} />
              <Skeleton variant="rectangular" width={100} height={40} />
              <Skeleton variant="rectangular" width={100} height={40} />
              <Skeleton variant="rectangular" width={100} height={40} />
              <Skeleton variant="rectangular" width={100} height={40} />
            </>
          ) : (
            // Render menu items when not loading
            <ul className={styles.StyledMenuList}>
              <MenuItem href="/" label="Overview" isActive={true} />
              <MenuItem href="/" label="Transactions" />
              <MenuItem href="/" label="Analytics" />
              <MenuItem href="/" label="Accounts" />
              <MenuItem href="/" label="Wallet" />
            </ul>
          )}
          <ToggleTheme />
          <div className={styles.StyledAccountActionsWrapper}>
            <FontAwesomeIcon icon={faGear} fontSize="1.5rem" cursor="pointer" />
            <FontAwesomeIcon icon={faBell} fontSize="1.5rem" cursor="pointer" />
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
                className="bg-red-500 p-2 rounded-xl text-white-default font-bold"
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
      ) : (
        !loading && <HamburgerMenu />
      )}
    </div>
  );
};

export default Header;
