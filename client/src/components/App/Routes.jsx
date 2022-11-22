import React from "react";
import history from "browserHistory";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import PageError from "shared/components/PageError";

import Project from "components/Project";

import NavbarLeft from "./NavbarLeft";
import Authenticate from "./Authenticate";
import { Main } from "./AppStyles";

const Routes = () => (
  <Router history={history}>
    <Main>
      <NavbarLeft />
      <Switch>
        <Redirect exact from="/" to="/project" />
        <Route path="/authenticate" component={Authenticate} />
        <Route path="/project" component={Project} />
        <Route component={PageError} />
      </Switch>
    </Main>
  </Router>
);

export default Routes;
