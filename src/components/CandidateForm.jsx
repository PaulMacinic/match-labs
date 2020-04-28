import React, { useState, useEffect } from "react";

import styles from "./CandidateForm.module.css";
import Button from "./Button";

const CandidateForm = ({ fields, onFormSubmit }) => {
  // set mock values in state

  const onChange = (e) => {
    // Create values array copy
    // Find index of element we want to change and update array at that index
  };

  const formHandler = (e) => {
    //Execute the onSubmit prop from the parent
  };

  return (
    <>
      <form onSubmit={formHandler} className={styles.form}>
        {/* Loop through the values in mocks */}
        <Button type={"submit"} variant={"secondary"} size={"medium"}>
          Submit
        </Button>
      </form>
    </>
  );
};

export default CandidateForm;
