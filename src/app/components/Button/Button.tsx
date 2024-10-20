import React from "react";
import styles from "./Button.styles.module.css";
// import { Button as MuiButton } from "@mui/material";
// import { ButtonProps as MuiButtonProps } from "@mui/material";

interface ButtonProps {
  children: React.ReactNode;
  label?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, label, icon }) => {
  return <button className={styles.StyledButton}>{children}</button>;
};

export default Button;
