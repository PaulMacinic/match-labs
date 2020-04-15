import React from "react";
import styles from "./Likes.module.css";

import { labs, technologies } from "../mocks";
import Card from "../components/Card";

const Likes = () => {
  return (
    <div className={styles.content}>
      {labs.map((lab) => (
        <Card
          outline
          name={lab.name}
          imgUrl={lab.url}
          technologies={technologies}
        ></Card>
      ))}
    </div>
  );
};

export default Likes;
