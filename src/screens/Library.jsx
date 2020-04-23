import React, {useState, useEffect} from "react";
import Card from "../components/Card";
import fetchJson from "../static/Services";
import Loader from '../components/Loader';
import buttonStyles from "../components/Button.module.css";
import styles from './Library.module.css';

const defaultState = {
    labs: [],
    candidates: [],
    isLoading: true,
    isCompanyMode: true
}

const Library = (props) =>  {
    const [state, setState] = useState(defaultState);
    const role = state.isCompanyMode ? 'Company' : 'Candidate';

    useEffect( () => {
        fetchJson('candidates').then(candidates => {
            setState(prevState => {
                return {
                    ...prevState,
                    candidates: candidates,
                    isLoading: false
                }
            });
        });
        fetchJson('labs').then(labs => {
            setState(prevState => {
                return {
                    ...prevState,
                    labs: labs,
                    isLoading: false
                }
            });
        });
    }, []);

    const buttonRole = () => {
        return (
        <button 
            onClick={(e) => handleOnButtonRoleClick(e)}
            className={`${buttonStyles.button} ${state.isCompanyMode ? buttonStyles.primary : buttonStyles.secondary} ${buttonStyles.small}`}
            children={role}
        />
    )};    

    const buttonOrLoading = state.isLoading ? <Loader /> : buttonRole();

    const handleOnButtonRoleClick = (e) => {
        e.preventDefault();
        setState(prevState => {
          return {
            ...prevState,
            isCompanyMode: !prevState.isCompanyMode
          }
        })
    }

    const handleOnCardClick = (e, id) => {
        e.preventDefault();
        props.history.push(`/profile/${id}`);
    }

    const candidateCards = state.labs.map(lab => 
        <div key={lab.id} onClick={(e) => handleOnCardClick(e, lab.id)}>
            <Card
                outline 
                imgUrl={lab.company.profile_image} 
                name={lab.name} 
                technologies={lab.technologies} 
            />
        </div>
    );

    const companyCandidates = state.candidates.map( candidate =>
        <div className={styles.candidates}  key={candidate.id}>
            <h1>No time for Candidate Card</h1>
            <img src={candidate.profile_image} alt="Candidate Profile"/>
            <div>{`First name: ${candidate.first_name}`}</div>
            <div>{`Last name: ${candidate.last_name}`}</div>
            <div>{`Email: ${candidate.email}`}</div>
            <div>{`Description: ${candidate.description}`}</div>
        </div>
    )

    const screenByRole = state.isCompanyMode ? companyCandidates : candidateCards;


    return (
      <div>
        {buttonOrLoading}
        {screenByRole}
      </div>
    );
  };
  
  export default Library;
