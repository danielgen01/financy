"use client"
import React from "react"

import Image from "next/image"
import MenuItem from "./MenuItem"
import { faBell, faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./Header.styles.module.css" // Stelle sicher, dass der Pfad korrekt ist
import Link from "next/link"
import { useMediaQuery } from "@mui/material"
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu"

const Header: React.FC = () => {
  const isLaptopOrAbove = useMediaQuery("(min-width: 1280px)")

  return (
    <div className={styles.StyledHeaderWrapper}>
      <Link href="/">
        <Image src={"/Logo.png"} alt={"Logo_Financy"} width={150} height={50} />
      </Link>
      {isLaptopOrAbove ? (
        <>
          {" "}
          <ul className={styles.StyledMenuList}>
            <MenuItem label="Overview" isActive={true}></MenuItem>
            <MenuItem label="Transactions"></MenuItem>
            <MenuItem label="Analytics"></MenuItem>
            <MenuItem label="Accounts"></MenuItem>
            <MenuItem label="Wallet"></MenuItem>
          </ul>
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
            <div className="flex mx-auto overflow-hidden">
              <Image
                src={"/Profile.png"}
                height={40}
                width={40}
                alt="Dummy Image"
                className={styles.StyledAccountProfileImage}
              />
            </div>
          </div>
        </>
      ) : (
        <HamburgerMenu></HamburgerMenu>
      )}
    </div>
  )
}

export default Header
