import React, { useState } from "react";
import CandidateForm from "../components/CandidateForm";
import { CREATE_CANDIDATE_FIELDS } from "../mocks";
import PageTitle from "../components/PageTitle";
import { register, assignRole } from "../utils/request";
import Loader from "../components/Loader";

const Register = () => {
  const [isLoading, setIsLoading] = useState(null);

  const onFormSubmit = async (values) => {
    // call the register API function
    // if user call the assignUserRole function
    setIsLoading(true);
    const { email, password, ...rest } = values;
    const user = await register({
      email,
      password,
    });

    if (user.id) assignUserRole(email, rest);
    setIsLoading(false);
  };

  const assignUserRole = async (email, values) => {
    // Call assignRole to pass user data to API
    const account = await assignRole({ email, ...values });
    console.log(account);
  };

  if (isLoading) return <Loader />;

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
