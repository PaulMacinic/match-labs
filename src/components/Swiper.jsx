import React, { useContext } from "react";
import { withRouter, Link } from "react-router-dom";
import styles from "./Swiper.module.css";
import Card from "./Card";
import { AppContext } from "../Context";
import Loader from "./Loader";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import { like, dislike } from "../utils/request";
import Match from "./Match";

const Swiper = ({ items, callback }) => {
  const { user } = useContext(AppContext);
  const [values, setValues] = useState({ swiped: true, direction: "" });
  const [match, setMatch] = useState(false)
  const next = items[items.length - 2];
  const current = items[items.length - 1];

  const onButtonClick = async (direction) => {
    const liked =
      direction === "right"
        ? await like(current.id)
        : await dislike(current.id);

    if(!liked.match)
      setValues({ swiped: false, direction });
    else
      setMatch(true)
  };

  const reset = () => {
    setValues({ swiped: true, direction: "" });
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

  if (match) {
    return <Match candidateData={user.role === 'candidate' ? {...user.personal, name:`${user.personal.first_name} ${user.personal.last_name}`} : current} companyData={user.role === 'company' ? user.personal : current.company} callback={callback}/>;
  }

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

        <CSSTransition
          key={current.id}
          in={values.swiped}
          timeout={300}
          classNames={{ exit: styles.exit, exitDone: styles.exit }}
          onExited={() => {
            reset();
            callback();
          }}
        >
          <Link
            to={`/profile/${current.id}`}
            className={`${styles.cardContainer} ${
              styles[values.direction] || ""
              } `}
          >
            <Card
              outline={user.role === "candidate"}
              name={current.name}
              imgUrl={current.profile_image}
              technologies={current.technologies}
            ></Card>
          </Link>
        </CSSTransition>
      </div>

      {_renderButtons()}
    </section>
  );
};

export default withRouter(Swiper);
