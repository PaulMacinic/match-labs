import React, { useEffect } from "react";
import styles from "./Likes.module.css";

import { fetchLikes } from "../utils/request";
import { useState } from "react";
import Loader from "../components/Loader";
import Swiper from "../components/Swiper";
import Match from "../components/Match";

const Likes = () => {
  const [likes, setLikes] = useState(null);
  // set match state variable

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

  const onMatch = () => {
    // match is likes.length - 1
    // setMatch and removeLike
  };

  const onContinueSwiping = () => {};

  if (!likes) return <Loader></Loader>;

  return (
    <div className={styles.content}>
      <Swiper items={likes} callback={removeLike} onMatch={onMatch}></Swiper>
      {/* if match render <Match/> */}
      {/* add match and onContinueSwiping */}
    </div>
  );
};

export default Likes;
