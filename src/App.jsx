import React from "react";
import Profile from "./screens/Profile";
import Likes from "./screens/Likes";
import Register from "./screens/Register";
import Account from "./screens/Account";
import Library from "./screens/Library";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Toggle from "./components/Toggle";
import Login from "./screens/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Toggle />
      <Switch>
        <Route path="/profile/:id" component={Profile}></Route>
        <Route path="/library" component={Library}></Route>
        <Route path="/account" component={Account}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/" component={Likes}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
