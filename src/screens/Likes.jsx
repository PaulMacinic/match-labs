import React from "react";
import styles from "./Likes.module.css";

import { labs, technologies } from "../mocks";
import Card from "../components/Card";
import Loader from "../components/Loader";

const Likes = (props) => {
  return (
    <div className={styles.content}>
      {labs.map((lab) => (
        <div
          key={lab.id}
          onClick={() => props.history.push(`/profile/${lab.id}`)}
        >
          <Card
            outline
            name={lab.name}
            imgUrl={lab.url}
            technologies={technologies}
          ></Card>
        </div>
      ))}
    </div>
  );
};

export default Likes;
