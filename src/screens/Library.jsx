import React from "react";

import styles from "./Library.module.css";
import PageTitle from "../components/PageTitle";

const Library = (props) => {
  return (
    <>
      <PageTitle>
        <h3>Library</h3>
      </PageTitle>

      <div className={"box-wide"}>
        <div className={styles.cards}>Cards go here</div>
      </div>
    </>
  );
};

export default Library;
