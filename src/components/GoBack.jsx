import React from "react";
import styles from "./GoBack.module.css";
import { useHistory } from "react-router-dom";

const GoBack = () => {
  const history = useHistory();
  console.log(history);
  return (
    <div className={styles.goBack}>
      <img
        onClick={() => history.goBack()}
        src={require("../static/svg/close.svg")}
        alt={"close-button"}
      />
    </div>
  );
};
export default GoBack;
