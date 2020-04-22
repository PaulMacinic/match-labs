import React, {useState, useEffect} from "react";
import likesStyles from "./Likes.module.css";
import profileStyles from "./Profile.module.css";
import Card from "../components/Card";
import { API } from "../static/Services";
import Loader from '../components/Loader';
import buttonStyles from "../components/Button.module.css";

const defaultState = {
    labs: [],
    candidates: [],
    loading: <Loader />,
    isCompanyMode: true
}

const style = {
    fontSize: '32px'
}

const Library = (props) =>  {
    const [state, setState] = useState(defaultState);
    const role = state.isCompanyMode ? 'Company' : 'Candidate';

    useEffect( () => {
        API.fetchAllLabs().then(labs => {
            setState(prevState => {
                return {
                    ...prevState,
                    labs: labs,
                    loading: ''
                }
            });
        });
        API.fetchAllCandidates().then(candidates => {
            setState(prevState => {
                return {
                    ...prevState,
                    candidates: candidates,
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
    const butonOrLoading = state.loading === '' ? buttonRole() : state.loading;

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

    const companyCandidates = state.candidates.map( candicate =>
        <div key={candicate.id}>
            <h1>No time for Candidate Card</h1>
            <img src={candicate.profile_image} alt="Candidate Profile"/>
            <div style={style}>{`First name: ${candicate.first_name}`}</div>
            <div style={style}>{`Last name: ${candicate.last_name}`}</div>
            <div style={style}>{`Email: ${candicate.email}`}</div>
            <div style={style}>{`Description: ${candicate.description}`}</div>
        </div>
    )

    const screenByRole = state.isCompanyMode ? companyCandidates : candidateCards;

    return (
      <div>
        {butonOrLoading}
        {screenByRole}
      </div>
    );
  };
  
  export default Library;