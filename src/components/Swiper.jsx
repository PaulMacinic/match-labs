import React, { useContext } from "react";
import { withRouter, Link } from "react-router-dom";
import styles from "./Swiper.module.css";
import Card from "./Card";
import { AppContext } from "../Context";
import Loader from "./Loader";

const Swiper = ({ items }) => {
  // 6. bring user for outline

  //1. define current card

  const onButtonClick = async () => {
    // 4. execute callback that removes like
  };

  const _renderButtons = () => {
    // 3. onCLick buttons call function
    // return (
    //   <div className={styles.buttons}>
    //     <div className={styles.button}>
    //       <img src={require("../static/svg/close.svg")} alt={"close"} />
    //     </div>
    //     <div className={styles.button}>
    //       <img src={require("../static/svg/heart.svg")} alt={"heart"} />
    //     </div>
    //   </div>
    // );
  };

  // if (!items) return <Loader></Loader>;

  return (
    <section className={styles.swiper}>
      <div className={styles.content}>
        {/* 5. render next card */}

        {/* 2. render current card   */}
      </div>

      {/* {_renderButtons()} */}
    </section>
  );
};

export default withRouter(Swiper);
