import React, { useState } from "react";
import CandidateForm from "../components/CandidateForm";
import { CREATE_CANDIDATE_FIELDS, CREATE_COMPANY_FIELDS } from "../mocks";
import PageTitle from "../components/PageTitle";
import { register, assignRole } from "../utils/request";
import Loader from "../components/Loader";
import styles from "./Register.module.css";
import Button from "../components/Button";

const Register = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [role, setRole] = useState(null);

  const onFormSubmit = async (values) => {
    setIsLoading(true);
    const { email, password, technologies, ...rest } = values;
    const user = await register({
      email,
      password,
    });

    if (user.id) assignUserRole(email, technologies, rest);
    setIsLoading(false);
  };

  const assignUserRole = async (email, technologies, values) => {
    const account = await assignRole(role, {
      [role]: { email, ...values },
      technologies,
    });
  };

  const _renderRoleSelector = () => {
    return (
      <section className={styles.roles}>
        <p className={styles.intro}>Are you a candidate or a company?</p>

        <div className={styles.button}>
          <Button
            variant={"secondary"}
            size={"huge"}
            action={() => setRole("company")}
          >
            Company
          </Button>
        </div>

        <div className={styles.button}>
          <Button
            variant={"secondary"}
            size={"huge"}
            action={() => setRole("candidate")}
          >
            Candidate
          </Button>
        </div>
      </section>
    );
  };

  if (isLoading) return <Loader />;

  return (
    <>
      <PageTitle>
        <h3>Register</h3>
      </PageTitle>
      {role ? (
        <CandidateForm
          onSubmit={onFormSubmit}
          fields={
            role === "candidate"
              ? CREATE_CANDIDATE_FIELDS
              : CREATE_COMPANY_FIELDS
          }
        ></CandidateForm>
      ) : (
        _renderRoleSelector()
      )}
    </>
  );
};

export default Register;
