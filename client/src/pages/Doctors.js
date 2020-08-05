import React from "react";
import { Redirect } from "react-router-dom";

// import Doctors from "../components/Doctors";
import SideNav from "../components/sideNav";
import TopNav from "../components/TopNav";
import DoctorTab from "../components/DoctorsTab";

const Doctors = ({ isAuthenticated, props }) => {
  if (!isAuthenticated) return <Redirect to="/" />;

  return (
    <div className="dash-cont">
      <main className="nav">
        <SideNav />
      </main>
      <div className="side">
        <div style={{ width: "100%", margn: "0px auto" }}>
          <TopNav title={"doctors"} />
          {/* <Doctor /> */}
          {/* <Doctor/> */}
          {/* <All /> */}
          <DoctorTab />
        </div>
      </div>
    </div>
  );
};

export default Doctors;
