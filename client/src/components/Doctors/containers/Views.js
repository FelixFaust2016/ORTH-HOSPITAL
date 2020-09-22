import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import DoctorsDashboard from "../pages/DoctorsDash";
import Appointments from "../pages/Appointment";
import Patients from "../pages/Patients";
import Settings from "../pages/Settings";
import FourOFour from "../../FourOFour"

class Views extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Switch>
        <Route path="/dashboard" exact component={DoctorsDashboard} />
        <Route path="/doctors_appointments" component={Appointments} />
        <Route path="/doctors_patients" component={Patients} />
        <Route path="/doctors_settings" component={Settings} />
        <Route exact path="/*" component={FourOFour} />
      </Switch>
    );
  }
}

export default Views;
