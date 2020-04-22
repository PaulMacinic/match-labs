import React, { useState, useEffect } from "react";
import styles from "./Likes.module.css";
import Card from "../components/Card";
import Loader from "../components/Loader";
import fetchAPI from "../utility";
import { technologies } from "../mocks";

const Likes = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const type = props.type ? props.type : "lab";

  async function FetchMyAPI() {
    const res = await fetchAPI(type);
    const data = [...res];
    setData(data);
    setLoading(false);
  }

  useEffect(() => {
    FetchMyAPI();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className={styles.content}>
      {data.map((lab) => (
        <div
          key={lab.id}
          onClick={() =>  props.history.push(`/profile/${type}/${lab.id}`)} >
          <Card
            outline
            name={lab.name}
            imgUrl={
              type === "lab" ? lab.company.profile_image : lab.profile_image
            }
            technologies={type === "lab" ? lab.technologies : technologies}
          ></Card>
        </div>
      ))}
    </div>
  );
};

export default Likes;
