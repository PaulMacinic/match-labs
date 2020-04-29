import React, { useEffect, useState } from "react";

import CandidateForm from "../components/CandidateForm";
import PageTitle from "../components/PageTitle";
import Loader from "../components/Loader";
import { EDIT_CANDIDATE_FIELDS } from "../mocks";

const Account = () => {
  // 1. Subscribe to AppContext data
  const [fields, setFields] = useState(EDIT_CANDIDATE_FIELDS);

  useEffect(() => {
    // 2. Map with object keys and format your data before setting it in state
  }, []);

  const onFormSubmit = (values) => {
    console.log(values);
  };

  if (!fields) return <Loader />;

  return (
    <>
      <PageTitle>
        <h3>Edit account</h3>
      </PageTitle>
      <CandidateForm onSubmit={onFormSubmit} fields={fields}></CandidateForm>
    </>
  );
};

export default Account;
