import React from "react";

import Card from "../components/Card";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <>
      <div className={styles.profile}>
        <div className={styles.hero}>
          <Card></Card>
        </div>

        <div className={styles.rightSide}>
          <h3 className={styles.name}>NAME</h3>

          <section className={styles.skills}>
            <p className={styles.tagsTitle}>Technologies</p>
          </section>

          <section className={styles.objectives}>
            <h4 className={styles.heading}>Objectives</h4>
          </section>

          <section className={styles.description}>
            <h4 className={styles.heading}>About</h4>
          </section>
        </div>
      </div>
    </>
  );
};

export default Profile;
