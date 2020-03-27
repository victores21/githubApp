import React from "react";
import "./App.css";
import Search from "./pages/Search/index";
import User from "./pages/User/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/:userId" component={User} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
