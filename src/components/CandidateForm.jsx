import React, { useState, useEffect } from "react";
import Select from "react-select";

import styles from "./CandidateForm.module.css";
import Button from "./Button";
import Loader from "./Loader";
import { fetchTechnologies } from "../utils/request";

const CandidateForm = ({ fields, onSubmit }) => {
  // 1. Set values and technologies
  const [values, setValues] = useState(fields);
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    // 2. Get technologies from API
    const onMount = async () => {
      const technologies = await fetchTechnologies();
      setTechnologies(technologies);
      console.log(technologies);
    };
    onMount();
  }, []);

  const onChange = (e) => {
    const newValues = [...values];
    const index = newValues.findIndex((value) => value.name === e.target.name);
    newValues[index] = { ...newValues[index], value: e.target.value };
    setValues(newValues);
  };

  const onSelectChange = (selected) => {
    // 3. copy values
    const newValues = [...values];
    // find index of technologies input
    const index = newValues.findIndex((value) => value.name === "technologies");
    // loop through the selected values
    newValues[index] = { name: "technologies", value: selected };
    setValues(newValues);
  };

  const formHandler = (e) => {
    e.preventDefault();
    const obj = {};
    values.forEach((item) => {
      obj[item.name] = item.value;
    });

    onSubmit(obj);
  };

  if (!values || !technologies) return <Loader></Loader>;

  return (
    <>
      <form onSubmit={formHandler} className={styles.form}>
        {values.map((field) => {
          // 4. Check if field is not technologies
          if (field.name !== "technologies") {
            return (
              <div key={field.name} className={styles.field}>
                <input
                  required
                  onChange={onChange}
                  value={field.value}
                  placeholder={field.placeholder || ""}
                  name={field.name}
                ></input>
              </div>
            );
          }
          // 5. Bring prebuilt select
          // Add onSelectChange and options
          else {
            return (
              <div key={field.name} className={styles.field}>
                <Select
                  onChange={onSelectChange}
                  options={technologies}
                  isMulti
                  placeholder={field.placeholder || "Technologies"}
                  name={field.name}
                />
              </div>
            );
          }
        })}

        <Button type={"submit"} variant={"secondary"} size={"medium"}>
          Submit
        </Button>
      </form>
    </>
  );
};

export default CandidateForm;
