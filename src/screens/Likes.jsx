import React from "react";
import styles from "./Likes.module.css";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { useFetch, API_Company } from "../utility";

const Likes = (props) => {
  const [data, loading] = useFetch(API_Company);

  return loading ? (
    <Loader />
  ) : (
    <div className={styles.content}>
      {data.map((lab) => (
        <div
          key={lab.id}
          onClick={() => props.history.push(`/profile/${lab.id}`)}
        >
          <Card
            outline
            name={lab.name}
            imgUrl={lab.company.profile_image}
            technologies={lab.technologies}
          ></Card>
        </div>
      ))}
    </div>
  );
};

export default Likes;
