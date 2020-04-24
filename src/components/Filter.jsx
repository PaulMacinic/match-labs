import React, { useState } from "react";
import styles from "./Filter.module.css";

const options = [
  { name: "matches", id: 0 },
  { name: "all", id: 1 },
];

const Filter = ({ handleItemClick }) => {
  const [activeItem, setActiveItem] = useState(1);

  const onFilterItemClick = (id, name) => {
    handleItemClick(id, name);
    setActiveItem(id);
  };

  return (
    <div className={styles.filter}>
      {options.map((option) => (
        <div
          onClick={() => onFilterItemClick(option.id, option.name)}
          key={option.id}
          className={`${styles.option} ${
            option.id === activeItem ? styles.active : ""
          }`}
        >
          {option.name}
        </div>
      ))}
    </div>
  );
};

export default Filter;
