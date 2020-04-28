import React from 'react'
import styles from './Account.module.css'
import CandidateForm from '../components/CandidateForm'
import {EDIT_CANDIDATE_FIELDS as inputData} from '../mocks'

const Account = () => {

    const handleSubmitButton = (e, formResult) => {
        e.preventDefault();
        console.log(formResult);
    };

    return (
        <div>
            <h1 style={{marginTop: '3rem', textAlign: 'center'}}>Account</h1>
            <div className={`${styles.accountForm} ${styles.field}`}>
                <CandidateForm inputData={inputData} handleSubmitButton={handleSubmitButton}/>
            </div>
        </div>
    )
}; 

export default Account;
