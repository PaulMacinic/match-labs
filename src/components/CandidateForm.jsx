import React, { useState } from "react";

import styles from "./CandidateForm.module.css";
import Button from "./Button";

const CandidateForm = ({ fields, onSubmit }) => {
  // set mock values in state
  const [values, setValues] = useState(fields);

  const onChange = (e) => {
    // Create values array copy
    // Find index of element we want to change and update array at that index
    const newValues = [...values];
    const index = newValues.findIndex((value) => value.name === e.target.name);
    newValues[index].value = e.target.value;
    setValues(newValues);
  };

  const formHandler = (e) => {
    //Execute the onSubmit prop from the parent
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <>
      <form onSubmit={(e) => formHandler(e)} className={styles.form}>
        {/* Loop through the values in mocks */}
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
