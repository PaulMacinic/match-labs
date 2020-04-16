import React from "react";

import Card from "../components/Card";
import styles from "./Profile.module.css";
import { labs } from "../mocks";
import Tags from "../components/Tags";

const Profile = (props) => {
  const lab = labs.find((lab) => lab.id === parseInt(props.match.params.id));

  return (
    <>
      <div className={styles.profile}>
        <div className={styles.hero}>
          <Card imgUrl={lab.url}></Card>
        </div>

        <div className={styles.rightSide}>
          <h3 className={styles.name}>{lab.name}</h3>

          <section className={styles.skills}>
            <p className={styles.tagsTitle}>Technologies</p>
            {lab.technologies && <Tags tags={lab.technologies}></Tags>}
          </section>

          <section className={styles.objectives}>
            <h4 className={styles.heading}>Objectives</h4>
            <p>{lab.objectives}</p>
          </section>

          <section className={styles.description}>
            <h4 className={styles.heading}>About</h4>
            {lab.description}
          </section>
        </div>
      </div>
    </>
  );
};

export default Profile;
