import React, { useEffect } from "react";
import styles from "./Likes.module.css";

import { fetchLikes } from "../utils/request";
import { useState } from "react";
import Loader from "../components/Loader";
import Swiper from "../components/Swiper";

const Likes = () => {
  const [likes, setLikes] = useState(null);

  useEffect(() => {
    const onMount = async () => {
      const likes = await fetchLikes();
      setLikes(likes);
    };
    onMount();
  }, []);

  const removeLike = () => {
    const newLikes = [...likes];
    newLikes.pop();
    setLikes(newLikes);
  };

  if (!likes) return <Loader></Loader>;

  return (
    <div className={styles.content}>
      <Swiper items={likes} callback={removeLike}></Swiper>
    </div>
  );
};

export default Likes;
