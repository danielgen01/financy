import styled from "styled-components"
import { MenuItemProps } from "./MenuItem.types"
import Image from "next/image"

export const StyledLabelText = styled.a<MenuItemProps>`
  font-weight: 600;
  font-size: 16px;
  color: #516778;
  transition-duration: 250ms;
  padding: 0.5rem;
  border-radius: 0.25rem;

  ${({ isActive }) =>
    isActive === true && `color:#5854c0 , background-color: #f2f6fd;`}

  &:hover {
    color: #5854c0;
    background-color: #f2f6fd;
    cursor: pointer;
  }
`

export const StyledListItem = styled.li`
  list-style-type: none;
`
