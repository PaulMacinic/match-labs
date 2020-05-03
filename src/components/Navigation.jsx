import React, { useContext } from "react";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { AppContext } from "../Context";

const navigationItems = [
  { id: 1, route: "", protected: true },
  {
    id: 2,
    route: "library",
    protected: true,
  },
  {
    id: 3,
    route: "register",
    protected: false,
  },
  {
    id: 4,
    route: "login",
    protected: false,
  },
  {
    id: 5,
    route: "account",
    protected: true,
  },
  {
    id: 6,
    route: "logout",
    protected: true,
  },
];

const Navigation = () => {
  // 1. Bring user from context
  const { user } = useContext(AppContext);

  // 2. Filter navigationItems item.protected === !!user

  return (
    // 3. Filter navigationItems item.protected === !!user
    <div className={styles.navigation}>
      <div className={"box-wide"}>{/* 4. Render a NavLink */}</div>
    </div>
  );
};

export default Navigation;
