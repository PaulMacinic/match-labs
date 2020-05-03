import React, { useEffect } from "react";
import { logout } from "../utils/request";
import { useContext } from "react";
import { AppContext } from "../Context";

const Logout = () => {
  const { setUser } = useContext(AppContext);

  useEffect(() => {
    const onMount = async () => {
      localStorage.setItem("role", "");
      localStorage.setItem("token", "");
      await logout();
      setUser(false);
      window.location.replace("/");
    };
    onMount();
  }, []);

  return <div>Logging out</div>;
};

export default Logout;
