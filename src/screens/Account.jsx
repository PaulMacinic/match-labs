import React, { useContext, useEffect, useState } from "react";

import CandidateForm from "../components/CandidateForm";
import PageTitle from "../components/PageTitle";
import { AppContext } from "../Context";
import Loader from "../components/Loader";

const Account = () => {
  const { user } = useContext(AppContext);
  const [fields, setFields] = useState(null);

  useEffect(() => {
    const newFields = Object.keys(user.personal).map((key) => ({
      name: key,
      value: user.personal[key],
    }));
    console.log(user);
    setFields(newFields);
  }, [user]);

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
