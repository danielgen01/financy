import React from "react"

import styles from "./LayoutSection.styles.module.css"

export const LayoutSection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <section className={styles.StyledLayoutSection}>{children}</section>
}
