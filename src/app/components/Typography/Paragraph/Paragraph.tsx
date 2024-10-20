import React from "react";
import styles from "./Paragraph.styles.module.css";

const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <p className={styles.StyledParagraph}>{children}</p>;
};

export default Paragraph;
