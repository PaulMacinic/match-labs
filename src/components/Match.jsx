import React, { useContext } from "react";

import Card from "./Card";
import Button from "./Button";
import styles from "./Match.module.css";
import { AppContext } from "../Context";

const Match = ({ match, onContinueSwiping }) => {
  const { user } = useContext(AppContext);

  return (
    <div className={styles.match}>
      <div className={styles.header}>
        <h1>It's a match</h1>
      </div>
      <div className={styles.cards}>
        <div className={styles.left}>
          <Card
            imgUrl={user.personal.profile_image}
            name={user.personal.first_name}
          ></Card>
        </div>

        <div className={styles.right}>
          <Card
            outline
            imgUrl={match.company.profile_image}
            name={match.name}
          ></Card>
        </div>
      </div>
      <Button variant={"secondary"} size={"small"} action={onContinueSwiping}>
        Keep on swiping
      </Button>
    </div>
  );
};

export default Match;
