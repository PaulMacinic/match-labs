import React from "react";
import styles from "./Button.module.css";

const ButtonComponent = (props) => {
  return (
    <>
      <button
        className={` ${styles["button"]}
        ${styles[props.variant]} ${styles[props.size]}`}
      >
        {props.children}
      </button>
      ;
    </>
  );
};

export default ButtonComponent;
