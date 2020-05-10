import React, { useContext } from "react";
import { withRouter, Link } from "react-router-dom";
import styles from "./Swiper.module.css";
import Card from "./Card";
import { AppContext } from "../Context";
import Loader from "./Loader";

const Swiper = ({ items, callback }) => {
  const { user } = useContext(AppContext);

  const next = items[items.length - 2];
  const current = items[items.length - 1];

  const onButtonClick = async () => {
    callback();
  };

  const _renderButtons = () => {
    return (
      <div className={styles.buttons}>
        <div className={styles.button} onClick={() => onButtonClick()}>
          <img src={require("../static/svg/close.svg")} alt={"close"} />
        </div>
        <div className={styles.button} onClick={() => onButtonClick()}>
          <img src={require("../static/svg/heart.svg")} alt={"heart"} />
        </div>
      </div>
    );
  };

  if (!items) return <Loader></Loader>;

  return (
    <section className={styles.swiper}>
      <div className={styles.content}>
        <Link to={`/profile/${next.id}`} className={`${styles.cardContainer}`}>
          <Card
            outline={user.role === "candidate"}
            name={next.name}
            imgUrl={next.profile_image}
            technologies={next.technologies}
          ></Card>
        </Link>

        <Link
          to={`/profile/${current.id}`}
          className={`${styles.cardContainer} `}
        >
          <Card
            outline={user.role === "candidate"}
            name={current.name}
            imgUrl={current.profile_image}
            technologies={current.technologies}
          ></Card>
        </Link>
      </div>

      {_renderButtons()}
    </section>
  );
};

export default withRouter(Swiper);
