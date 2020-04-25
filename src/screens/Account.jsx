import React, { useContext, useEffect, useState } from "react";
import { EDIT_CANDIDATE_FIELDS } from "../mocks";

import CandidateForm from "../components/CandidateForm";
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
      <CandidateForm
        onSubmit={onFormSubmit}
        fields={EDIT_CANDIDATE_FIELDS}
      ></CandidateForm>
    </>
  );
};

export default Account;
