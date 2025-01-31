import React from "react"

import styles from "./Paragraph.styles.module.css"

const Paragraph: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className }) => {
  const paragraphClassName = `${styles.StyledParagraph} ${className || ""}`
  return <p className={paragraphClassName}>{children}</p>
}

export default Paragraph
