import React, { useContext, useEffect, useState } from "react";

import CandidateForm from "../components/CandidateForm";
import PageTitle from "../components/PageTitle";

import Loader from "../components/Loader";
import { EDIT_CANDIDATE_FIELDS } from "../mocks";

const Account = () => {
  const [fields, setFields] = useState([]);

  const onFormSubmit = (values) => {
    console.log(values);
  };

  // if (!fields) return <Loader />;

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
