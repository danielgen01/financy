"use client";
import React from "react";
import Image from "next/image";
import MenuItem from "./MenuItem";
import { faBell, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.styles.module.css"; // Stelle sicher, dass der Pfad korrekt ist
import Link from "next/link";
import { useMediaQuery } from "@mui/material";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { ToggleTheme } from "../ToggleThemeButton/ToggleThemeButton";
import { logOut } from "@/app/utils/auth";
import { useAuth } from "@/app/utils/useAuth";

const Header: React.FC = () => {
  const isLaptopOrAbove = useMediaQuery("(min-width: 1280px)");
  const { user } = useAuth();

  const handleLogOut = () => {
    logOut();
    console.log("user logged out");
    window.location.reload();
  };

  return (
    <div className={styles.StyledHeaderWrapper}>
      <Link href="/">
        <Image src={"/Logo.png"} alt={"Logo_Financy"} width={150} height={50} />
      </Link>
      {isLaptopOrAbove ? (
        <>
          <ul className={styles.StyledMenuList}>
            <MenuItem href="/" label="Overview" isActive={true}></MenuItem>
            <MenuItem href="/" label="Transactions"></MenuItem>
            <MenuItem href="/" label="Analytics"></MenuItem>
            <MenuItem href="/" label="Accounts"></MenuItem>
            <MenuItem href="/" label="Wallet"></MenuItem>
          </ul>
          <ToggleTheme />
          <div className={styles.StyledAccountActionsWrapper}>
            <FontAwesomeIcon
              icon={faGear}
              fontSize={"1.5rem"}
              cursor={"pointer"}
            />
            <FontAwesomeIcon
              icon={faBell}
              fontSize={"1.5rem"}
              cursor={"pointer"}
            />

            {user ? (
              <>
                <div className="flex mx-auto overflow-hidden">
                  <Image
                    src={"/Profile.png"}
                    height={40}
                    width={40}
                    alt="Profile Image"
                    className={styles.StyledAccountProfileImage}
                  />
                </div>
                <button onClick={handleLogOut}>Logout</button>
              </>
            ) : (
              <Link className="shadow-sm p-2 rounded-xl bg-green-300" href={"./auth"}>Registrieren / Anmelden </Link>
            )}
          </div>
        </>
      ) : (
        <HamburgerMenu />
      )}
    </div>
  );
};

export default Header;
