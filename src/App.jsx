import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { AppContext } from "./Context";
import { me } from "./utils/request";
import Profile from "./screens/Profile";
import Likes from "./screens/Likes";
import Register from "./screens/Register";
import Account from "./screens/Account";
import Library from "./screens/Library";
import Toggle from "./components/Toggle";
import Login from "./screens/Login";
import Loader from "./components/Loader";
import Logout from "./screens/Logout";
import ProtectedRoute from "./components/ProtectedRoute";
import Navigation from "./components/Navigation";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const onMount = async () => {
      const user = await me();
      localStorage.setItem("role", user.role);
      setUser(user);
    };
    onMount();
  }, []);

  if (user === null) return <Loader />;

  return (
    // 1. Pass setUser to Context
    <AppContext.Provider value={{ user }}>
      <BrowserRouter>
        <Navigation />
        <section className={"app"}>
          <Toggle />
          <Switch>
            <Route path="/register" component={Register}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/logout" component={Logout}></Route>

            <ProtectedRoute path="/library" component={Library} />
            <ProtectedRoute path="/profile/:id" component={Profile} />
            <ProtectedRoute path="/account" component={Account} />
            <ProtectedRoute exact path="/" component={Likes} />
            <ProtectedRoute path="*">404</ProtectedRoute>
          </Switch>
        </section>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
