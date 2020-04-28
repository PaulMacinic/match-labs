import React, { useState } from 'react'
import styles from './CandidateForm.module.css'

const CandidateForm = (props) => {
    let defaultState = Object.assign({}, ...props.inputData.map(input => {
        const {value, name} = input;
        return {
            [name]: value
        }
    }));
    const [state, setState] = useState(defaultState);

    const handleOnChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setState(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    };

    const formInputs = props.inputData.map(input => {
        const {name, placeholder} = input;
        return (    
            <input
                key={name}
                type="text"
                name={name}
                value={`${state[name]}`}
                placeholder={placeholder}
                onChange={(e) => handleOnChange(e)}
                />
        )   
    });
    
    return (
        <form className={`${styles.form} ${styles.field}`}>
            {formInputs}
            <input type="submit" value="Submit" onClick={(e) => props.handleSubmitButton(e, state)}/>
        </form>
    )
}

export default CandidateForm;
