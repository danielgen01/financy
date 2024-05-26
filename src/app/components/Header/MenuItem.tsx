import React from "react"
import { MenuItemProps } from "./MenuItem.types"
import styles from "./MenuItem.styles.module.css"

const MenuItem: React.FC<MenuItemProps> = ({ label, isActive, href }) => {
  const labelClassName = isActive
    ? `${styles.StyledLabelText} ${styles.StyledLabelTextActive}`
    : styles.StyledLabelText

  return (
    <li className={styles.StyledListItem}>
      <a className={labelClassName} href={href}>
        {label}
      </a>
    </li>
  )
}

export default MenuItem
