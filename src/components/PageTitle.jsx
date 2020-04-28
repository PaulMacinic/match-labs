import React from "react";

import styles from "./PageTitle.module.css";

const PageTitle = (props) => {
  return <div className={styles.pageTitle}>{props.children}</div>;
};

export default PageTitle;
