import React, { useEffect, useState } from "react";

import styles from "./Library.module.css";
import PageTitle from "../components/PageTitle";

import { fetchMatches } from "../utils/request";
import Loader from "../components/Loader";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Library = (props) => {
  const [matches, setMatches] = useState(null);

  useEffect(() => {
    const onMount = async () => {
      const matches = await fetchMatches();
      setMatches(matches);
    };
    onMount();
  }, []);

  if (!matches) return <Loader />;

  return (
    <>
      <PageTitle>
        <h3>Library</h3>
      </PageTitle>

      <div className={"box-wide"}>
        <div className={styles.cards}>
          {matches.map((match) => (
            <Link key={match.id} to={`/profile/${match.id}`}>
              <Card
                imgUrl={match.profile_image}
                name={match.name}
                technologies={match.technologies}
              ></Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Library;
