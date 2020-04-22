import React, { useState, useEffect } from "react";
import ButtonComponent from "../components/Button";
import Loader from "../components/Loader";
import styles from "../screens/Likes.module.css";
import fetchAPI from "../utility";
import Card from "../components/Card";
import { technologies } from "../mocks";

const Library = () => {
  const [toggle, setToggle] = useState(true);
  const [labs, setLabs] = useState([]);
  const [candidate, setCandidate] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };

  async function FetchMyAPI() {
    const res = await fetchAPI("lab");
    const res2 = await fetchAPI("candidate");
    const lab = [...res];
    const candidate = [...res2];
    setLabs(lab);
    setCandidate(candidate);
    setLoading(false);
  }

  useEffect(() => {
    FetchMyAPI();
  }, []);
  return (
    <>
      <ButtonComponent
        text={toggle ? "Labs" : "Candidates"}
        variant={"primary"}
        size="small"
        handleClick={handleClick}
      />
      <br/>
      <br/>
      {loading ? (
        <Loader />
      ) : toggle ? (
        <div className={styles.content}>
          {candidate.map((lab) => (
            <div key={lab.id}>
              <Card
                outline
                name={lab.name}
                imgUrl={toggle ? lab.profile_image : lab.company.profile_image}
                technologies={toggle ? technologies : lab.technologies}
              ></Card>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.content}>
          {labs.map((lab) => (
            <div key={lab.id}>
              <Card
                outline
                name={lab.name}
                imgUrl={toggle ? lab.profile_image : lab.company.profile_image}
                technologies={toggle ? technologies : lab.technologies}
              ></Card>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Library;
