import React, { useEffect } from "react";
import styles from "./Likes.module.css";

import { fetchLikes } from "../utils/request";
import { useState } from "react";
import Loader from "../components/Loader";
import Swiper from "../components/Swiper";
import Match from "../components/Match";

const Likes = () => {
  const [likes, setLikes] = useState(null);
  const [match, setMatch] = useState(false);

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
    const match = { ...likes[likes.length - 1] };
    setMatch(match);
    removeLike();
  };

  const onContinueSwiping = () => {
    setMatch(null);
  };

  if (!likes) return <Loader></Loader>;

  return (
    <div className={styles.content}>
      <Swiper items={likes} callback={removeLike} onMatch={onMatch}></Swiper>
      {match && (
        <Match match={match} onContinueSwiping={onContinueSwiping}></Match>
      )}
    </div>
  );
};

export default Likes;
