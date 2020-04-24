import React from "react";
import styles from "./Button.module.css";

const Button = ({ variant, size, action, children, type }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      type={type || "button"}
      onClick={action}
    >
      {children}
    </button>
  );
};

export default Button;
