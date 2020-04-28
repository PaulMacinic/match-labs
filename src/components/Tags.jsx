import React from "react";
import styles from "./Tags.module.css";

const Tags = props => {
  return (
    <div className={styles.tags}>
      {props.tags.map(t => (
        <span key={t.id} className={styles.tag}>
          {t.name}
        </span>
      ))}
    </div>
  );
};

export default Tags;
