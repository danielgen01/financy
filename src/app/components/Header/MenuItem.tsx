import React from "react"

import styles from "./MenuItem.styles.module.css"
import type { MenuItemProps } from "./MenuItem.types"

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
