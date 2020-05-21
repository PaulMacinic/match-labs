import React, { useContext, useEffect, useState } from "react";

import CandidateForm from "../components/CandidateForm";
import PageTitle from "../components/PageTitle";
import { AppContext } from "../Context";
import Loader from "../components/Loader";
import { editAccount, fetchLabs } from "../utils/request";
import Card from "../components/Card";

const Account = () => {
  const { user } = useContext(AppContext);
  const [fields, setFields] = useState(null);
  const [lab, setLab] = useState(null);
  const [labFields, setLabFields] = useState(null);

  useEffect(() => {
    const onMount = async () => {
      const newFields = Object.keys(user.personal).map((key) => ({
        name: key,
        value: user.personal[key],
      }));

      const lab = await fetchLabs();

      setFields(newFields);
      setLab(lab);
      setLabFields(
        Object.keys(lab?.personal).map((key) => ({
          name: key,
          value: lab?.personal[key],
        }))
      );
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
        <h3>Edit account</h3>
      </PageTitle>
      {console.log(labFields)}
      {!!labFields && (
        <Card
          imgUrl={lab.company.profile_image}
          name={lab.personal.name}
        ></Card>
      )}
      {/* <CandidateForm
          onSubmit={onFormSubmit}
          fields={labFields}
        ></CandidateForm> */}

      {/* <CandidateForm onSubmit={onFormSubmit} fields={fields}></CandidateForm> */}
    </>
  );
};

export default Account;
