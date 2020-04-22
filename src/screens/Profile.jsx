import React, {useState, useEffect} from "react";

import Card from "../components/Card";
import styles from "./Profile.module.css";
import Tags from "../components/Tags";
import fetchJson from "../static/Services";
import Loader from '../components/Loader';

const defaultState = {
  lab: {},
  loading: <Loader />
}

const Profile = (props) => {
  const [state, setState] = useState(defaultState);
  const id = props.match.params.id;

  useEffect( () => {
    fetchJson('labs', id).then(result => {
        setState( {
          lab: result,
          loading: ''
        })
    });
    }, [id]);
  return (
    <>
      {state.loading}
      <div className={styles.profile}>
        <div className={styles.hero}>
          {state.lab.company && <Card imgUrl={state.lab.company.profile_image}></Card>}
        </div>

        <div className={styles.rightSide}>
          <h3 className={styles.name}>{state.lab.name}</h3>

          <section className={styles.skills}>
            <p className={styles.tagsTitle}>Technologies</p>
            {state.lab.technologies && <Tags tags={state.lab.technologies}></Tags>}
          </section>

          <section className={styles.objectives}>
            <h4 className={styles.heading}>Objectives</h4>
            <p>{state.lab.objectives}</p>
          </section>

          <section className={styles.description}>
            <h4 className={styles.heading}>About</h4>
            {state.lab.description}
          </section>
        </div>
      </div>
    </>
  );
};

export default Profile;
