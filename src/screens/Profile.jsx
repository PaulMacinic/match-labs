import React, { useState, useEffect } from "react";

import styles from "./Profile.module.css";
import Tags from "../components/Tags";
import Card from "../components/Card";
import { fetchProfile } from "../utils/request";
import Loader from "../components/Loader";

const Profile = (props) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const onMount = async () => {
      const id = props.match.params.id;
      const profile = await fetchProfile(id);
      setProfile(profile);
    };
    onMount();
  }, []);

  if (!profile) return <Loader />;

  return (
    <>
      <div className={styles.profile}>
        <div className={styles.hero}>
          <Card imgUrl={profile.profile_image}></Card>
        </div>

        <div className={styles.rightSide}>
          <h3 className={styles.name}>{profile.name}</h3>

          <section className={styles.skills}>
            <p className={styles.tagsTitle}>Technologies</p>
            {profile.technologies && <Tags tags={profile.technologies}></Tags>}
          </section>

          <section className={styles.objectives}>
            <h4 className={styles.heading}>Objectives</h4>
            <p>{profile.objectives}</p>
          </section>

          <section className={styles.description}>
            <h4 className={styles.heading}>About</h4>

            <p>{profile.description}</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Profile;
