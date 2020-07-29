import React from "react";
import { Redirect } from "react-router-dom";

import Doctors from "../components/Doctors";
import SideNav from "../components/sideNav";
import TopNav from "../components/TopNav"

const Appointments = ({ isAuthenticated }) => {
  if (!isAuthenticated) return <Redirect to="/" />;

  return (
    <div className="dash-cont">
      <main className="nav">
        <SideNav />
      </main>
      <div className="side">
      <TopNav title={"Appointments"}/>
      </div>
    </div>
  );
};

export default Appointments;
