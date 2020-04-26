import React, { useState, useEffect } from "react";

import styles  from "./CandidateForm.module.css";
import Button from "./Button";

const CandidateForm = ({ inputs, handleSubmission }) => {
    //const [data, setData] = useState(inputs.reduce((data, val) => { return {...data, [val.name]: val}}, {}))
    const [data, setData] = useState(inputs.reduce((data, val) => { return {...data, [val.name] : val.value}}, {}))

    const onFormSubmission = (event) => {
        event.preventDefault()
        handleSubmission(data)
    } 

    return (
        <>
        <form className={styles.form}>
            <fieldset className={styles.field}>
                {
                    inputs.map(item => {
                        return (
                            <input 
                                className={styles.field}
                                key={item.name}
                                name={item.name}
                                placeholder={item.placeholder}
                                value={data[item.name]}
                                onChange={(e) => {setData({...data, [item.name]: e.target.value})}}
                            />
                        )
                    })
                }
                <input className={styles.field} type="submit" onClick={(e) => onFormSubmission(e)}/>
            </fieldset>
        </form>
        </>
    )
}

export default CandidateForm;