/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import Card from "../components/Card";
import styles from "./Profile.module.css";
import Tags from "../components/Tags";
import fetchAPI from "../utility";
import Loader from "../components/Loader";

const Profile = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const type = props.match.params.type;

  async function FetchMyAPI() {
    const res = await fetchAPI(type);
    const data =
      await type === "lab"
        ? res.find((lab) => lab.id === parseInt(props.match.params.id))
        : res[0]; /* in our case for path "/profile/candidate/11" */
        
    setData(data);
    setLoading(false);
  }

  useEffect(() => {
    FetchMyAPI();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <div className={styles.profile}>
        <div className={styles.hero}>
          <Card
            imgUrl={
              type === "lab" ? data.company.profile_image : data.profile_image
            }
          ></Card>
        </div>

        <div className={styles.rightSide}>
          <h3 className={styles.name}>{data.name}</h3>

          <section className={styles.skills}>
            <p className={styles.tagsTitle}>Technologies</p>
            {data.technologies && <Tags tags={data.technologies}></Tags>}
          </section>

          <section className={styles.objectives}>
            <h4 className={styles.heading}>Objectives</h4>
            <p>{data.objectives}</p>
          </section>

          <section className={styles.description}>
            <h4 className={styles.heading}>About</h4>
            {data.description}
          </section>
        </div>
      </div>
    </>
  );
};

export default Profile;
