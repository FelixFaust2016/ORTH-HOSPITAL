import React from "react";
import { Redirect } from "react-router-dom";

import Doctors from "../components/Doctors";
import SideNav from "../components/sideNav";
import TopNav from "../components/TopNav";
import Appointment from "../components/AppointmentComp";
import AppointmentOverview from "../components/AppointmentOverView"

const Appointments = ({ isAuthenticated }) => {
  if (!isAuthenticated) return <Redirect to="/" />;

  return (
    <div className="dash-cont">
      <main className="nav">
        <SideNav />
      </main>
      <div className="side">
        <div style={{width:'100%'}}>
          <TopNav title={"Appointments"} />
          <AppointmentOverview />
        </div>
      </div>
    </div>
  );
};

export default Appointments;
