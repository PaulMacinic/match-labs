import React, { useContext, useEffect, useState } from "react";

import CandidateForm from "../components/CandidateForm";
import PageTitle from "../components/PageTitle";
import { AppContext } from "../Context";
import Loader from "../components/Loader";
import { editAccount } from "../utils/request";

const Account = () => {
  const { user } = useContext(AppContext);
  const [fields, setFields] = useState(null);

  useEffect(() => {
    const newFields = Object.keys(user.personal).map((key) => ({
      name: key,
      value: user.personal[key],
    }));
    setFields(newFields);
  }, [user]);

  const onFormSubmit = async (values) => {
    await editAccount(user.id, { [user.role]: values });
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
