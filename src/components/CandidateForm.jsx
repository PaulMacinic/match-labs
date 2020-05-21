import React, { useState, useEffect } from "react";

import styles from "./CandidateForm.module.css";
import Button from "./Button";
import Loader from "./Loader";
import Select from "react-select";
import { fetchTechnologies } from "../utils/request";

const CandidateForm = ({ fields, onSubmit }) => {
  // 1. Set values and technologies
  const [values, setValues] = useState(fields);

  useEffect(() => {
    // 2. Get technologies from API
  }, []);

  const onChange = (e) => {
    const newValues = [...values];
    const index = newValues.findIndex((value) => value.name === e.target.name);
    newValues[index] = { ...newValues[index], value: e.target.value };
    setValues(newValues);
  };

  const onSelectChange = (selected) => {
    // 4. copy values
    // find index of technologies input
    // map through the selected values
  };

  const formHandler = (e) => {
    e.preventDefault();
    const obj = {};
    values.forEach((item) => {
      obj[item.name] = item.value;
    });

    onSubmit(obj);
  };

  if (!values) return <Loader></Loader>;

  return (
    <>
      <form onSubmit={formHandler} className={styles.form}>
        {values.map((field) => (
          // 5. Check if field is not technologies
          <div key={field.name} className={styles.field}>
            <input
              required
              onChange={onChange}
              value={field.value}
              placeholder={field.placeholder || ""}
              name={field.name}
            ></input>
          </div>
          // 3. Bring prebuilt select
          // Add onSelectChange and options
        ))}

        <Button type={"submit"} variant={"secondary"} size={"medium"}>
          Submit
        </Button>
      </form>
    </>
  );
};

export default CandidateForm;
