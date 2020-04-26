import React, { useState } from "react";
import styles from "./Login.module.css";

import { login } from "../utils/request";
import PageTitle from "../components/PageTitle";
import Button from "../components/Button";

const Login = () => {
  const [fields, setFields] = useState({
    email: "Email",
    password: "Password",
  });

  const onInputChange = (e) => {
    // use e.target.name and e.target.value to create a new object
    const obj = { [e.target.name]: e.target.value };
    setFields((oldValues) => ({ ...oldValues, ...obj }));
  };

  const onFormSubmit = async (e) => {
    // preventDefault
    // send user data to login endpoint
    // if login succesful -> redirect to /
    e.preventDefault();

    const res = await login({
      email: fields.email,
      password: fields.password,
    });

    if (res.id) window.location.replace("/");
  };

  return (
    <>
      <PageTitle>
        <img src={require("../static/svg/logo.svg")} alt={"Match Labs logo"} />
      </PageTitle>

      <div className={"box-wide"}>
        <form onSubmit={onFormSubmit} className={styles.login}>
          {/* map the Object.keys(fields) */}
          {Object.keys(fields).map((key) => (
            <div key={key} className={styles.field}>
              <input
                required
                value={fields[key]}
                onChange={(e) => onInputChange(e)}
                type={key}
                name={key}
              ></input>
            </div>
          ))}

          <Button type={"submit"} variant="secondary" size={"huge"}>
            Sign in
          </Button>
        </form>
      </div>
    </>
  );
};

export default Login;
