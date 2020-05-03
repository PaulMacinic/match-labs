import React, { useEffect } from "react";
import styles from "./Likes.module.css";

import Card from "../components/Card";
import { fetchLikes } from "../utils/request";
import { useState } from "react";
import Loader from "../components/Loader";
import { useContext } from "react";
import { AppContext } from "../Context";

const Likes = (props) => {
  const [likes, setLikes] = useState(null);
  const { user } = useContext(AppContext);

  useEffect(() => {
    const onMount = async () => {
      const likes = await fetchLikes();
      setLikes(likes);
    };
    onMount();
  }, []);

  if (!likes) return <Loader></Loader>;

  return (
    <div className={styles.content}>
      {likes.map((like) => (
        <div
          key={like.id}
          onClick={() => props.history.push(`/profile/${like.id}`)}
        >
          <Card
            outline={user.role === "candidate"}
            name={like.name}
            imgUrl={like.profile_image}
            technologies={like.technologies}
          ></Card>
        </div>
      ))}
    </div>
  );
};

export default Likes;
