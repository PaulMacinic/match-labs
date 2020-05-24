import React, { useContext, useEffect, useState } from "react";
import CandidateForm from "../../components/CandidateForm";
import { AppContext } from "../../Context";
import Loader from "../../components/Loader";
import PageTitle from "../../components/PageTitle";
import { editAccount, fetchLabs } from "../../utils/request";
import styles from "./Account.module.css";

const Account = () => {
  const { user } = useContext(AppContext);
  const [fields, setFields] = useState(null);

  useEffect(() => {
    const onMount = async () => {
      const newFields = Object.keys(user.personal).map((key) => ({
        name: key,
        value: user.personal[key],
      }));

      setFields(newFields);
    };
    onMount();
  }, [user]);

  const onFormSubmit = async (values) => {
    const { technologies, ...rest } = values;
    await editAccount(user.id, { [user.role]: rest, technologies });
  };

  if (!fields) return <Loader />;

  return (
    <>
      <PageTitle>
        <h3>Edit Account</h3>
      </PageTitle>
      <div className={styles.account}>
        <CandidateForm fields={fields} onSubmit={onFormSubmit}></CandidateForm>
      </div>
    </>
  );
};

export default Account;
