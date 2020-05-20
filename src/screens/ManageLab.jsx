import React from "react";
import CandidateForm from "../components/CandidateForm";
import { MANAGE_LAB_FIELDS } from "../mocks";
import PageTitle from "../components/PageTitle";
import { createLab } from "../utils/request";

const ManageLab = () => {
  const onSubmit = (values) => {
    const { technologies, spots, start_date, ...rest } = values;
    createLab({ lab: { ...rest, spots: parseInt(spots) }, technologies });
  };

  return (
    <>
      <PageTitle>
        <h3>Create Lab</h3>
      </PageTitle>
      <CandidateForm onSubmit={onSubmit} fields={MANAGE_LAB_FIELDS} />
    </>
  );
};

export default ManageLab;
