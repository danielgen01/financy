import React from "react"

import styles from "./LayoutSection.styles.module.css"

export const LayoutSection: React.FC<{
  className?: string
  children: React.ReactNode
  isFullWidth?: boolean
  id?: string
}> = ({ children, isFullWidth, className, id }) => {
  const sectionClassName = `${isFullWidth ? styles.StyledLayoutSectionFullWidth : styles.StyledLayoutSection} ${className || ""}`

  return (
    <section className={sectionClassName} id={id}>
      {children}
    </section>
  )
}
