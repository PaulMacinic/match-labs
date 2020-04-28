import React, { useState } from "react";

const Toggle = () => {
  const [role, setRole] = useState("company");

  const toggleRole = () => {
    const currentRole = localStorage.getItem("role");
    const newRole = currentRole === "company" ? "candidate" : "company";
    localStorage.setItem("role", newRole);
    setRole(newRole);
  };

  return (
    <div style={{ position: "fixed", top: "2rem", left: "2rem" }}>
      <button onClick={toggleRole}>Toggle</button>
      <br />
      <br />
      <div>Current role is {role}</div>
    </div>
  );
};

export default Toggle;
