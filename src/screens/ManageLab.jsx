import React, { useState } from "react";
import Card from "../components/Card";
import styles from "./ManageLab.module.css";
import Button from "../components/Button";
import { fetchLabs, editLab, createLab } from "../utils/request";
import { useEffect } from "react";
import CandidateForm from "../components/CandidateForm";
import Loader from "../components/Loader";
import { MANAGE_LAB_FIELDS } from "../mocks";

const ManageLab = () => {
  const [lab, setLab] = useState(null);
  const [labFields, setLabFields] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    getLab();
  }, []);

  const getLab = async () => {
    const lab = await fetchLabs();
    setLab(lab);

    if (lab) {
      const { id, ...rest } = lab.personal;

      setLabFields(
        Object.keys(rest).map((key) => ({
          name: key,
          value: rest[key],
        }))
      );
    }
  };

  const deleteLab = async () => {
    const deleted = await deleteLab(lab.id);
  };

  const onFormSubmit = async (values) => {
    const { start_date, technologies, ...rest } = values;
    const labObj = { lab: rest, technologies };

    isEditing
      ? await editLab(lab.personal.id, labObj)
      : await createLab(labObj);

    await getLab();
    isEditing ? setIsEditing(!isEditing) : setIsCreating(!isCreating);
  };

  const _renderEditLab = () => {
    return (
      <>
        <Card
          outline
          imgUrl={lab?.company?.profile_image || ""}
          name={lab?.personal?.name || ""}
          technologies={lab?.personal.technologies.map((t) => ({
            id: t.value,
            name: t.label,
          }))}
        ></Card>
        <div className={styles.buttons}>
          <div className={styles.button}>
            <Button
              action={() => setIsEditing(!isEditing)}
              variant={"primary"}
              size={"small"}
            >
              Edit lab
            </Button>
          </div>
          <div className={styles.button}>
            <Button action={deleteLab} variant={"secondary"} size={"small"}>
              Delete lab
            </Button>
          </div>
        </div>
      </>
    );
  };

  const _renderCreateLab = () => {
    return (
      <>
        <Card outline></Card>
        <div className={styles.button}>
          <Button
            action={() => setIsCreating(!isCreating)}
            variant={"secondary"}
            size={"small"}
          >
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
        {lab && !isEditing && _renderEditLab()}

        {lab && isEditing && (
          <CandidateForm
            fields={labFields}
            onSubmit={onFormSubmit}
          ></CandidateForm>
        )}

        {!lab && !isCreating && _renderCreateLab()}

        {!lab && isCreating && (
          <CandidateForm
            fields={MANAGE_LAB_FIELDS}
            onSubmit={onFormSubmit}
          ></CandidateForm>
        )}
      </div>
    </div>
  );
};

export default ManageLab;
