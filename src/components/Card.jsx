import React from "react";
import styles from "./Card.module.css";
import Tags from "./Tags";

const Card = ({ outline, imgUrl, name, technologies }) => {
  const withBorder = outline ? styles.withBorder : "";

  return (
    <div className={`${styles.card} ${withBorder}`}>
      <>
        <img
          className={`${styles.image}`}
          src={imgUrl}
          alt={name}
          style={{ top: outline ? "11.5rem" : "" }}
        />
        {technologies && (
          <div className={styles.tagsContainer}>
            <Tags tags={technologies}></Tags>
          </div>
        )}
        <h4 className={styles.title}>{name || ""}</h4>
      </>
    </div>
  );
};

export default Card;
