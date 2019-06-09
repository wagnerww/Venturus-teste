import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Principal from "./Pages/Principal";
import Posts from "./Pages/Posts";

import MasterPage from "./Templates/MasterPage";

const Pages = ({ component: Component, ...options }) => (
  <Route
    {...options}
    render={props => (
      <MasterPage>
        <Component {...props} />
      </MasterPage>
    )}
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Pages exact={true} path="/" component={Principal} />
      <Pages exact={true} path="/posts/:id" component={Posts} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
