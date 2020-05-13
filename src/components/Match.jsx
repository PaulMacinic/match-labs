import React, { useContext } from "react";

import Card from "./Card";
import Button from "./Button";
import styles from "./Match.module.css";
import { AppContext } from "../Context";

const Match = () => {
  return (
    <div className={styles.match}>
      <div className={styles.header}>
        <h1>It's a match</h1>
      </div>
      <div className={styles.cards}>
        <div className={styles.left}>{/* Render user card */}</div>

        <div className={styles.right}>{/* Render company card */}</div>
      </div>

      <Button variant={"secondary"} size={"small"}>
        Keep on swiping
      </Button>
    </div>
  );
};

export default Match;
