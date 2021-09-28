import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const AppRouter = ({ children }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={}/>
        <Route path="/test" component={}/>
      </Switch>
      {children}
    </BrowserRouter>
  );
};
