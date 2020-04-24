import React from "react";
import Profile from "./screens/Profile";
import Likes from "./screens/Likes";
import Library from "./screens/Library";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Toggle from "./components/Toggle";

const App = () => {
  return (
    <BrowserRouter>
      <Toggle />
      <Switch>
        <Route path="/profile/:id" component={Profile}></Route>
        <Route path="/library" component={Library}></Route>
        <Route path="/" component={Likes}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
