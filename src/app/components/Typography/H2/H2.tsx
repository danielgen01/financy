import React from "react"

import styles from "./H2.styles.module.css"

export const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h2 className={styles.StyledH2}>{children}</h2>
}
