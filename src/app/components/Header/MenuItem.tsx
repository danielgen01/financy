import React from "react"
import { MenuItemProps } from "./MenuItem.types"
import { StyledLabelText } from "./MenuItem.styles"

const MenuItem: React.FC<MenuItemProps> = ({ label, isActive }) => {
  console.log(isActive)
  return (
    <>
      <StyledLabelText isActive={isActive}>{label}</StyledLabelText>
    </>
  )
}

export default MenuItem
