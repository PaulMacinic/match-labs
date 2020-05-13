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
    // 2. remove item from likes array
  };

  if (!likes) return <Loader></Loader>;

  return (
    <div className={styles.content}>
      {/* 1. Add Swiper component and provide items */}
    </div>
  );
};

export default Likes;
