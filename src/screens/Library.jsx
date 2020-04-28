import React, {useState, useEffect} from "react";
import Card from "../components/Card";
import {fetchMatches } from "../utils/services";
import Loader from '../components/Loader';
import styles from './Library.module.css';
import { Link } from "react-router-dom";

const Library = (props) =>  {
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
        <div className={"box-wide"}>
            <div className={styles.cards}>
            {matches.map((match) => (
                <Link key={match.id} to={`/profile/${match.id}`}>
                    <Card
                        imgUrl={match.profile_image}
                        name={match.name}
                        technologies={match.technologies}
                    />
                </Link>
            ))}
            </div>
        </div>
    );
  };
  
  export default Library;
