import React from "react";
import { Redirect } from "react-router-dom";

import SideNav from "../component/SlideNav";
import TopNav from "../../TopNav";
import DoctorTab from "../../DoctorsTab";

const Doctors = ({ isAuthenticated, props }) => {
  // if (!isAuthenticated) return <Redirect to="/" />;

  return (
    <div className="dash-cont">
      <main className="nav">
        <SideNav />
      </main>
      <div className="side">
        <div style={{ width: "100%", margn: "0px auto" }}>
          <TopNav title={"doctors"} />
          <DoctorTab />
        </div>
      </div>
    </div>
  );
};

export default Doctors;
