import React from "react";
import styles from "./H1.styles.module.css";

export const H1: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h1 className={styles.StyledH1}>{children}</h1>;
};
