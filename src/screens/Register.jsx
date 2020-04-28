import React from "react";
import CandidateForm from "../components/CandidateForm";
import { CREATE_CANDIDATE_FIELDS } from "../mocks";
import PageTitle from "../components/PageTitle";

const Register = () => {
  const onFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <PageTitle>
        <h3>Register</h3>
      </PageTitle>
      {/* Mount CandidateForm with EDIT_CANDIDATE_FIELDS */}
    </>
  );
};

export default Register;
