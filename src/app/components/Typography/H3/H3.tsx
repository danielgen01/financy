import React from "react"

import styles from "./H3.styles.module.css"

export const H3: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h3 className={styles.StyledH3}>{children}</h3>
}
