import React from "react";
import CandidateForm from "../components/CandidateForm";
import { EDIT_CANDIDATE_FIELDS } from "../mocks";
import PageTitle from "../components/PageTitle";

const Account = () => {
  return (
    <>
      <PageTitle>
        <h3>Edit account</h3>
      </PageTitle>
      ;<CandidateForm fields={EDIT_CANDIDATE_FIELDS}></CandidateForm>
    </>
  );
};

export default Account;
