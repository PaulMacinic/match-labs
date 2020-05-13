import React, { useContext } from "react";
import { withRouter, Link } from "react-router-dom";
import styles from "./Swiper.module.css";
import Card from "./Card";
import { AppContext } from "../Context";
import Loader from "./Loader";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

const Swiper = ({ items, callback }) => {
  const { user } = useContext(AppContext);
  // 2. create values for swiped and direction

  const next = items[items.length - 2];
  const current = items[items.length - 1];

  const onButtonClick = async (direction) => {
    // 3. setValues swiped and direction
    callback();
  };

  const reset = () => {
    // 5. reset setValues swiped:true direction:""
  };

  const _renderButtons = () => {
    return (
      <div className={styles.buttons}>
        <div className={styles.button} onClick={() => onButtonClick("left")}>
          <img src={require("../static/svg/close.svg")} alt={"close"} />
        </div>
        <div className={styles.button} onClick={() => onButtonClick("right")}>
          <img src={require("../static/svg/heart.svg")} alt={"heart"} />
        </div>
      </div>
    );
  };

  if (!items.length) return <Loader></Loader>;

  return (
    <section className={styles.swiper}>
      <div className={styles.content}>
        {items.length > 1 && (
          <Link
            to={`/profile/${next.id}`}
            className={`${styles.cardContainer}`}
          >
            <Card
              outline={user.role === "candidate"}
              name={next.name}
              imgUrl={next.profile_image}
              technologies={next.technologies}
            ></Card>
          </Link>
        )}

        {/* 1. add <CSSTransition></CSSTransition> */}
        <Link
          to={`/profile/${current.id}`}
          className={`${styles.cardContainer}`}
          // 4. add direction className or ""
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
