import React, { useContext } from "react";
import { AppContext } from "../Context";

const Toggle = () => {
  const { user } = useContext(AppContext);

  const toggleRole = () => {
    const currentRole = localStorage.getItem("role");
    const newRole = currentRole === "company" ? "candidate" : "company";
    localStorage.setItem("role", newRole);
  };

  if (!user) return "";

  return (
    <div
      style={{
        position: "fixed",
        top: "2rem",
        left: "2rem",
        width: "32rem",
        wordBreak: "break-word",
      }}
    >
      <button onClick={toggleRole}>Toggle</button>
      <br />
      <br />
      <div>ID: {user.id}</div>
      <div>ROLE: {user.role}</div>
      <br />
      {Object.values(user.personal).map((value) => (
        <div key={value}>{value}</div>
      ))}
    </div>
  );
};

export default Toggle;
