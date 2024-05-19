import React from "react"
import { MenuItemProps } from "./MenuItem.types"
import { StyledLabelText, StyledListItem } from "./MenuItem.styles"

const MenuItem: React.FC<MenuItemProps> = ({ label, isActive }) => {
  return (
    <StyledListItem>
      <StyledLabelText isActive={isActive}>{label}</StyledLabelText>
    </StyledListItem>
  )
}

export default MenuItem
