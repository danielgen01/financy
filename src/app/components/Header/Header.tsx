"use client"
import React from "react"
import {
  StyledAccountActionsWrapper,
  StyledHeaderWrapper,
  StyledMenuList,
} from "./Header.styles"
import Image from "next/image"
import MenuItem from "./MenuItem"
import { faBell, faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <Image src={"/Logo.png"} alt={""} width={150} height={50} />
      <StyledMenuList>
        <MenuItem label="Overview" isActive={true}></MenuItem>
        <MenuItem label="Transactions"></MenuItem>
        <MenuItem label="Analytics"></MenuItem>
        <MenuItem label="Accounts"></MenuItem>
        <MenuItem label="Wallet"></MenuItem>
      </StyledMenuList>
      <StyledAccountActionsWrapper>
        <FontAwesomeIcon icon={faGear} fontSize={"1.5rem"} cursor={"pointer"} />
        <FontAwesomeIcon icon={faBell} fontSize={"1.5rem"} cursor={"pointer"} />
        <div className="flex mx-auto overflow-hidden">
          <Image
            src={"/Profile.png"}
            height={40}
            width={40}
            alt="Dummy Image"
            className="rounded-full aspect-square object-cover"
          />
        </div>
      </StyledAccountActionsWrapper>
    </StyledHeaderWrapper>
  )
}

export default Header
