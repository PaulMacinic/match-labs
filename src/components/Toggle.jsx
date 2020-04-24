import React from "react";

const Toggle = () => {
  const toggleRole = () => {
    const currentRole = localStorage.getItem("role");
    const newRole = currentRole === "company" ? "candidate" : "company";
    localStorage.setItem("role", newRole);
  };

  return (
    <div>
      <button onClick={toggleRole}>Toggle</button>
      <br />
      <br />
      <div>Current role is {localStorage.getItem("role")}</div>
    </div>
  );
};

export default Toggle;
