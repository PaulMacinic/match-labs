import React, { useState } from "react";
import styles from "./Login.module.css";

import { login } from "../utils/request";
import PageTitle from "../components/PageTitle";
import Button from "../components/Button";

const Login = (props) => {
  const [fields, setFields] = useState({
    email: "Email",
    password: "Password",
  });

  const onInputChange = (e) => {
    const obj = { [e.target.name]: e.target.value };
    setFields((oldValues) => ({ ...oldValues, ...obj }));
  };

  const onFormSubmit = async (e) => {
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
          {Object.keys(fields).map((key) => (
            <div key={key} className={styles.field}>
              <input
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
