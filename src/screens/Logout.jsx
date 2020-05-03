import React, { useEffect } from "react";
import { logout } from "../utils/request";
import { useContext } from "react";
import { AppContext } from "../Context";

const Logout = () => {
  // 1. get the setUser function from Context
  // setUser to false
  useEffect(() => {
    const onMount = async () => {
      localStorage.setItem("role", "");
      localStorage.setItem("token", "");
      await logout();
      window.location.replace("/");
    };
    onMount();
  }, []);

  return <div>Logging out</div>;
};

export default Logout;
