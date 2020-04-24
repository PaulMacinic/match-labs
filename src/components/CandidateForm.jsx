import React, { useState } from "react";

import styles from "./CandidateForm.module.css";
import Button from "./Button";

const CandidateForm = ({ fields, onSubmit }) => {
  const [values, setValues] = useState(fields);

  const onChange = (e) => {
    const newValues = [...values];
    const index = newValues.findIndex((value) => value.name === e.target.name);
    newValues[index].value = e.target.value;
    setValues(newValues);
  };

  const formHandler = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <>
      <form onSubmit={(e) => formHandler(e)} className={styles.form}>
        {values.map((field) => (
          <div key={field.name} className={styles.field}>
            <input
              onChange={onChange}
              value={field.value}
              placeholder={field.placeholder}
              name={field.name}
            ></input>
          </div>
        ))}
        <Button type={"submit"} variant={"secondary"} size={"medium"}>
          Submit
        </Button>
      </form>
    </>
  );
};

export default CandidateForm;
