import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";

import PageTitle from "../components/PageTitle";
import Button from "../components/Button";

const Login = () => {
  const [fields, setFields] = useState({
    email: "Email",
    password: "Password",
  });

  const onInputChange = (e) => {
    // 2. use [e.target.name] and e.target.value to create a new object
    // Merge with oldValues
  };

  const onFormSubmit = async (e) => {
    // preventDefault
    // send user data to login endpoint
    // if login succesful -> redirect to /
  };

  return (
    <>
      <PageTitle>
        <img src={require("../static/svg/logo.svg")} alt={"Match Labs logo"} />
      </PageTitle>

      <div className={"box-wide"}>
        <form onSubmit={onFormSubmit} className={styles.login}>
          {/* 1. map the Object.keys(fields) */}
          <div className={styles.field}></div>

          <Button type={"submit"} variant="secondary" size={"huge"}>
            Sign in
          </Button>
        </form>
      </div>
    </>
  );
};

export default Login;
