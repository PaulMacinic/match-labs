import React, { useContext, useEffect, useState } from "react";

import CandidateForm from "../components/CandidateForm";
import PageTitle from "../components/PageTitle";
import { AppContext } from "../Context";
import Loader from "../components/Loader";
import { editAccount } from "../utils/request";
import { EDIT_CANDIDATE_FIELDS } from "../mocks";

const Account = () => {
  // 1. import user from Context
  // 2. set fields reference to state
  const { user } = useContext(AppContext);

  useEffect(() => {
    // 2. Loop with Object.keys on user personal data
    // Set data to state
  }, [user]);

  const onFormSubmit = async (values) => {
    // 3. Submit user.role and values to editAccount
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
