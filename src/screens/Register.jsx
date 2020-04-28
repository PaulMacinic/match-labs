import React from 'react'
import styles from './Register.module.css'
import CandidateForm from '../components/CandidateForm'
import {CREATE_CANDIDATE_FIELDS as inputData} from '../mocks'

const Register = () => {
    return (
        <div>
            <h1 style={{marginTop: '3rem', textAlign: 'center'}}>Register</h1>
            <div className={`${styles.accountForm} ${styles.field}`}>
                <CandidateForm inputData={inputData}/>
            </div>
        </div>
    )
}

export default Register;
