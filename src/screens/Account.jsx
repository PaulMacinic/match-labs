import React from "react";
import CandidateForm from "../components/CandidateForm";
import { EDIT_CANDIDATE_FIELDS } from "../mocks";
import PageTitle from "../components/PageTitle";

const Account = () => {
  const onFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <PageTitle>
        <h3>Edit account</h3>
      </PageTitle>
      {/* Mount CandidateForm with EDIT_CANDIDATE_FIELDS */}
      <CandidateForm
        onSubmit={onFormSubmit}
        fields={EDIT_CANDIDATE_FIELDS}
      ></CandidateForm>
    </>
  );
};

export default Account;
