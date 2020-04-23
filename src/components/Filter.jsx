import React from "react";
import styles from "./Filter.module.css";

const options = [
  { name: "matches", id: 0 },
  { name: "all", id: 1 },
];

const Filter = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.option}>I'm a fiter item</div>
    </div>
  );
};

export default Filter;
