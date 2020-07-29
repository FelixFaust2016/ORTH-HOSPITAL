import React from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";

import { store } from "../store";
import { getCurrentDoctor } from "../store/action";
import Home from "../pages/Home";
import RegisterAuth from "../pages/RegisterAuth";
import LoginAuth from "../pages/LoginAuth";
import Dashboard from "../pages/Dashboard";
import Doctor from "../pages/Doctors";
import DoctorPage from "../pages/DoctorsPage";
import Appointment from "../pages/Appointments";
import Profile from "../pages/Profile";
import Payment from "../pages/Payment";
import TestPage from "../pages/Test";

const Views = ({ auth, getCurrentDoctor }) => (
  <div>
    <Switch>
      <Route exact path="/" render={(props) => <Home {...props} />} />
      <Route
        exact
        path="/register"
        render={() => (
          <RegisterAuth
            authType={"register"}
            isAuthenticated={auth.isAuthenticated}
          />
        )}
      />
      <Route
        exact
        path="/login"
        render={() => (
          <LoginAuth
            authType={"login"}
            isAuthenticated={auth.isAuthenticated}
          />
        )}
      />
      <Route
        exact
        path="/dashboard"
        render={() => <Dashboard isAuthenticated={auth.isAuthenticated} />}
      />
      <Route
        exact
        path="/doctors"
        render={(props) => (
          <Doctor isAuthenticated={auth.isAuthenticated} {...props} />
        )}
      />
      <Route
        exact
        path="/appointments"
        render={() => <Appointment isAuthenticated={auth.isAuthenticated} />}
      />
      <Route
        exact
        path="/profile"
        render={() => <Profile isAuthenticated={auth.isAuthenticated} />}
      />
      <Route
        exact
        path="/payment"
        render={() => <Payment isAuthenticated={auth.isAuthenticated} />}
      />
      <Route
        exact
        path="/doctors/:id"
        render={(props) => (
          <DoctorPage getDoctors={(id) => getCurrentDoctor(id)} {...props} />
        )}
      />
      <Route
        exact
        path="/text"
        render={() => <TestPage isAuthenticated={auth.isAuthenticated} />}
      />
    </Switch>
  </div>
);

export default withRouter(
  connect((store) => ({ auth: store.auth }), { getCurrentDoctor })(Views)
);
