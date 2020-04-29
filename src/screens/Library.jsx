import React, { useState, useEffect, useContext } from "react";

import styles from "./Library.module.css";
import PageTitle from "../components/PageTitle";

import { fetchMatches, fetchLikes } from "../utils/request";
import Loader from "../components/Loader";
import Card from "../components/Card";
import Filter from "../components/Filter";
import { Link } from "react-router-dom";
import { AppContext } from "../Context";

const Library = (props) => {
  const [matches, setMatches] = useState(null);
  const [likes, setLikes] = useState(null);
  const [data, setData] = useState(null);
  const role = localStorage.getItem("role");
  const { user } = useContext(AppContext);
  console.log(user);

  useEffect(() => {
    const onMount = () => {
      getData();
    };
    onMount();
  }, []);

  const getData = async () => {
    const matches = await fetchMatches();
    setMatches(matches);
    const likes = fetchLikes();
    setLikes([likes]);
    setData([likes]);
  };

  const onFilterClick = (id, name) => {
    const data = name === "matches" ? matches : likes;
    setData(data);
  };

  if (!data) return <Loader />;

  return (
    <>
      <PageTitle>
        <h3>Library</h3>
      </PageTitle>
      <div className={"box-wide"}>
        <Filter handleItemClick={onFilterClick} />
        <div className={styles.cards}>
          {data.map((match) => (
            <Link key={match.id} to={`/profile/${match.id}`}>
              <Card
                outline={role === "candidate"}
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
