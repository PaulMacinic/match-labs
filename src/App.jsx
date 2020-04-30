import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { me } from "./utils/request";
import Profile from "./screens/Profile";
import Likes from "./screens/Likes";
import Register from "./screens/Register";
import Account from "./screens/Account";
import Library from "./screens/Library";
import Toggle from "./components/Toggle";
import Login from "./screens/Login";
import Loader from "./components/Loader";

const App = () => {
  // 1. setUser in state
  // Check if /me is loggedIn
  // Redirect if not logged in

  // Persist user with context

  // if (user === null) return <Loader />;

  return (
    // 2. Add Context provider
    <BrowserRouter>
      <Toggle />
      <Switch>
        <Route path="/profile/:id" component={Profile}></Route>
        <Route path="/library" component={Library}></Route>
        <Route path="/account" component={Account}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/" component={Likes}></Route>
        {/* <Route
            path="/"
            render={() =>
              user ? (
                <Likes />
              ) : (
                <Redirect
                  to={{
                    pathname: "/login",
                  }}
                />
              )
            }
          ></Route> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
