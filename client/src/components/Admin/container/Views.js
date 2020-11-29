import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/dashboard";
import Create from "../pages/CreateDocAdmin";
import Patients from "../pages/Patients";
import Doctors from "../pages/Doctor";
import Appointment from "../pages/Appointment";
import NotFound from "../../../components/FourOFour";

const Views = () => (
  <Switch>
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/patients" component={Patients} />
    <Route exact path="/doctors" component={Doctors} />
    <Route exact path="/Appointments" component={Appointment} />
    <Route exact path="/Create" component={Create} />
    <Route exact path="/*" component={NotFound} />
  </Switch>
);

export default Views;
