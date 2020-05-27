import React, { useContext } from "react";

import Card from "./Card";
import Button from "./Button";
import styles from "./Match.module.css";
import { AppContext } from "../Context";
import { fetchProfile } from "../utils/request";
import { useEffect } from "react";

const Match = ({ candidateData, companyData, callback }) => {
  return (
    <div className={styles.match}>
      <div className={styles.header}>
        <h1>It's a match</h1>
      </div>
      <div className={styles.cards}>
        <div className={styles.left}>{/* Render user card */}
          <Card
            name={candidateData.name}
            imgUrl={candidateData.profile_image}
          />
        </div>

        <div className={styles.right}>{/* Render company card */}
          <Card
            outline
            name={companyData.name}
            imgUrl={companyData.profile_image}
          />
        </div>
      </div>

      <Button variant={"secondary"} size={"small"} action={() => callback()}>
        Keep on swiping
      </Button>
    </div>
  );
};

export default Match;
