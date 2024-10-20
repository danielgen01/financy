import React from "react";
import styles from "./Button.styles.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  label?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <button className={styles.StyledButton} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
