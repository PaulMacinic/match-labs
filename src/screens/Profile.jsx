import React from "react";
import Card from "../components/Card";
import styles from "./Profile.module.css";
import Tags from "../components/Tags";
import { useFetch, API_Company } from "../utility";
import Loader from "../components/Loader";

const Profile = (props) => {
  const [data, loading] = useFetch(API_Company);
  const lab = data.find((lab) => lab.id === parseInt(props.match.params.id));

  return loading ? (
    <Loader />
  ) : (
    <>
      <div className={styles.profile}>
        <div className={styles.hero}>
          <Card imgUrl={lab.company.profile_image}></Card>
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
            {lab.company.description}
          </section>
        </div>
      </div>
    </>
  );
};

export default Profile;
