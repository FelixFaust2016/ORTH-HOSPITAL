import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Patients from "../pages/Patients";
import Test from "../pages/Test";
import NotFound from "../../FourOFour";

const Views = () => (
  <Switch>
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/lab_patients" component={Patients} />
    <Route exact path="/lab_test" component={Test} />
    <Route exact path="/*" component={NotFound} /> 
  </Switch>
);

export default Views;
