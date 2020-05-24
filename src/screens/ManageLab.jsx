import React, { useState } from "react";
import Card from "../components/Card";
import styles from "./ManageLab.module.css";
import Button from "../components/Button";
import { fetchLabs, createLab } from "../utils/request";
import { useEffect } from "react";
import CandidateForm from "../components/CandidateForm";
import Loader from "../components/Loader";
import { MANAGE_LAB_FIELDS } from "../mocks";

const ManageLab = () => {
  const [lab, setLab] = useState(null);
  // const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    // 1. getLab() of user
  }, []);

  const getLab = async () => {
    // 2. setLab
  };

  const onFormSubmit = async (values) => {
    // 6. createLab
    // build labObj
    // refetch lab
    // setIsCreating(!isCreating)
  };

  const _renderCreateLab = () => {
    // 4. setIsCreating()}
    return (
      <>
        <Card imgUrl={require("../static/svg/logo.svg")} outline></Card>
        <div className={styles.button}>
          <Button variant={"secondary"} size={"small"}>
            Create lab
          </Button>
        </div>
      </>
    );
  };

  if (lab === null) return <Loader></Loader>;

  return (
    <div className={"box-wide"}>
      <div className={styles.manageLab}>
        {/* 3. _renderCreateLab() */}

        {/* 5. isCreating render CandidateForm */}
      </div>
    </div>
  );
};

export default ManageLab;
