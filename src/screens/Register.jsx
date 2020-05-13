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
  // 3. set local state variable role
  // const [role, setRole] = useState(null);

  const onFormSubmit = async (values) => {
    // 4. Destructure technologies and send to assignUserRole
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
    // 2. send technologies and role to endpoint
    const account = await assignRole({ email, ...values });
  };

  // const _renderRoleSelector = () => {
  //   return (
  //     <section className={styles.roles}>
  //       <p className={styles.intro}>Are you a candidate or a company?</p>

  //       <div className={styles.button}>
  //         <Button
  //           variant={"secondary"}
  //           size={"huge"}
  //           action={() => setRole("company")}
  //         >
  //           Company
  //         </Button>
  //       </div>

  //       <div className={styles.button}>
  //         <Button
  //           variant={"secondary"}
  //           size={"huge"}
  //           action={() => setRole("candidate")}
  //         >
  //           Candidate
  //         </Button>
  //       </div>
  //     </section>
  //   );
  // };

  if (isLoading) return <Loader />;

  return (
    <>
      {/* 1. Render Form or _renderRoleSelector based on role */}
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
