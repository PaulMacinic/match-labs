import React, { useState } from "react";
import ButtonComponent from "../components/Button";
import Loader from "../components/Loader";
import Card from "../components/Card";
import { useFetch, API_Candidates } from "../utility";
import Likes from "./Likes";
import styles from "./Profile.module.css";
import Tags from "../components/Tags";

const Library = () => {
  const [dataCandidate, loadingCandidate] = useFetch(API_Candidates);
  const [display, setDisplay] = useState(true);

  return (
    <>
      <div onClick={() => setDisplay(!display)}>
        ;
        <ButtonComponent size="small" variant="primary">
          Toggle
        </ButtonComponent>
      </div>
      {display ? (
        loadingCandidate && display ? (
          <Loader />
        ) : (
          dataCandidate.map((item) => (
            <div className={styles.profile} key={item.id}>
              <div className={styles.hero}>
                <Card imgUrl={item.profile_image}></Card>
              </div>

              <div className={styles.rightSide}>
                <h3
                  className={styles.name}
                >{`${item.first_name} ${item.last_name}`}</h3>

                <section className={styles.skills}>
                  <p className={styles.tagsTitle}>Technologies</p>
                  {item.technologies && <Tags tags={item.technologies}></Tags>}
                </section>

                <section className={styles.description}>
                  <h4 className={styles.heading}>About</h4>
                  {item.description}
                </section>

                <section className={styles.objectives}>
                  <h4 className={styles.heading}>Contact data:</h4>
                  <p>Email : {item.email}</p>
                  <p>Phone : {item.phone}</p>
                </section>
              </div>
            </div>
          ))
        )
      ) : (
        <Likes />
      )}
    </>
  );
};

export default Library;
