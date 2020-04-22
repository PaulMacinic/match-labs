import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { labs } from "../mocks";

import styles from "./Library.module.css";
import PageTitle from "../components/PageTitle";
import Card from "../components/Card";

// import Filter from "../components/Filter";

const Library = (props) => {
  return (
    <>
      <PageTitle>
        <h3>Library</h3>
      </PageTitle>

      <div className={"box-wide"}>
        <div className={styles.cards}></div>
      </div>
    </>
  );
};

export default Library;
