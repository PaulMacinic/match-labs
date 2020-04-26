import React, { useState, useEffect } from "react";

import styles  from "./Register.module.css";
import PageTitle from "../components/PageTitle";
import CandidateForm from "../components/CandidateForm";


import { CREATE_CANDIDATE_FIELDS } from "../mocks";

const Register = () => {
    const onFormSubmission = (data) => {
        console.log(data)
    }

    return (
        <>
            <PageTitle>
                <h3>
                    Register
                </h3>
            </PageTitle>
            <CandidateForm inputs={CREATE_CANDIDATE_FIELDS} handleSubmission={onFormSubmission} />
        </>
    )
}

export default Register;
