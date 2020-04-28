import React, { useState } from "react";
import buttonStyles from "../components/Button.module.css";

const Toggle = () => {
    const [role, setRole] = useState('company');

    const toggleRole = () => {
        const currentRole = localStorage.getItem("role");
        const newRole = currentRole === "company" ? "candidate" : "company";
        
        setRole(newRole);
        localStorage.setItem("role", newRole);
    };

    return (
        <button
            onClick={() => toggleRole()}
            className={`${buttonStyles.button} ${role === 'company' ? buttonStyles.primary : buttonStyles.secondary} ${buttonStyles.small}`}
            children={role}
        />
    )
};

export default Toggle;
