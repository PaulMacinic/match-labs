import React, { useState } from "react";
import CandidateForm from "../components/CandidateForm";
import { CREATE_CANDIDATE_FIELDS } from "../mocks";
import PageTitle from "../components/PageTitle";
import Loader from "../components/Loader";

const Register = () => {
  const onFormSubmit = async (values) => {
    // call the register API function
    // if user call the assignUserRole function
    console.log(values);
  };

  const assignUserRole = async (email, values) => {
    // Call assignRole to pass user data to API
  };

  return (
    <>
      <PageTitle>
        <h3>Register</h3>
      </PageTitle>

      <CandidateForm
        onSubmit={onFormSubmit}
        fields={CREATE_CANDIDATE_FIELDS}
      ></CandidateForm>
    </>
  );
};

export default Register;
