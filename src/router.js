import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SearchPage from "./pages/Search";

const AppRouter = ({ children }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route path="/test" /*component={}*/ />
      </Switch>
      {children}
    </BrowserRouter>
  );
};

export default AppRouter;
