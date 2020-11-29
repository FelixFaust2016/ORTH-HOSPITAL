import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Views from "./Views";
import DoctorsViews from "../components/Doctors/containers/Views";
import AdminView from "../components/Admin/container/Views";
import LabView from "../components/Lab/container/Views";

const AuthicatedApp = ({ auth }) => {
  console.log("#################");
  console.log(auth);
  const role = auth?.user?.role || "";

  const components = {
    patient: <Views />,
    doctor: <DoctorsViews />,
    admin: <AdminView />,
    lab: <LabView />,
  };
  return <Switch>{components[role]}</Switch>;
};

export default connect((store) => ({ auth: store.auth }), {})(AuthicatedApp);
