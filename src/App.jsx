import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

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
    <AppContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <section className={"app"}>
          <Toggle />
          <Switch>
            {/* 1. Move logic to ProtectedRoute  */}
            {/* 2. Add proper routes and protectedRoutes */}
            <Route path="/profile/:id" component={Profile}></Route>
            <Route path="/library" component={Library}></Route>
            <Route path="/account" component={Account}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/logout" component={Logout}></Route>

            <Route
              path="/"
              render={(props) =>
                user ? (
                  <Likes {...props} />
                ) : (
                  <Redirect
                    to={{
                      pathname: "/login",
                    }}
                  />
                )
              }
            ></Route>
          </Switch>
        </section>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
