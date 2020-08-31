import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import DoctorsDashboard from "../pages/DoctorsDash";
import Appointments from "../pages/Appointment";
import Patients from "../pages/Patients";
import Settings from "../pages/Settings";

class Views extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Switch>
        <Route path="/doctors_dashboard" component={DoctorsDashboard} />
        <Route path="/doctors_appointments" component={Appointments} />
        <Route path="/doctors_patients" component={Patients} />
        <Route path="/doctors_settings" component={Settings} />
      </Switch>
    );
  }
}

export default Views;
