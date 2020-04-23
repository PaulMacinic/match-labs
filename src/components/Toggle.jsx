import React from "react";

const Toggle = () => {
  const toggleRole = () => {
    const currentRole = localStorage.getItem("role");
    const newRole = currentRole === "company" ? "candidate" : "company";
    localStorage.setItem("role", newRole);
  };

  return <button onClick={() => toggleRole()}>Toggle Role</button>;
};

export default Toggle;
