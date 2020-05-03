import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AppContext } from "../Context";
import { useContext } from "react";

const ProtectedRoute = ({ component: Component, ...props }) => {
  const { user } = useContext(AppContext);

  return (
    <Route
      {...props}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
