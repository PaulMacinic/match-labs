import React, { useState, useEffect } from "react";

import styles  from "./Account.module.css";
import PageTitle from "../components/PageTitle";
import CandidateForm from "../components/CandidateForm";

import { EDIT_CANDIDATE_FIELDS } from "../mocks";

const Account = () => {
    const onFormSubmission = (data) => {
        console.log(data)
    }

    return (
        <>
            <PageTitle>
                <h3>
                    Account
                </h3>
            </PageTitle>
            <CandidateForm inputs={EDIT_CANDIDATE_FIELDS} handleSubmission={onFormSubmission} />
        </>
    )
}

export default Account;