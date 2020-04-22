import React from "react";
import Profile from "./screens/Profile";
import Likes from "./screens/Likes";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Library from "./screens/Library";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/profile/:type/:id" component={Profile}></Route>
        <Route path="/library" component={Library}></Route>
        <Route path="/" component={Likes}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
