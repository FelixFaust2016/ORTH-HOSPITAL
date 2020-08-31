import React from "react";

import Navigation from "../components/SideNav";
import TopNav from "../components/TopNav";
import PatientsCards from "../components/PatientsCards";

const Patients = () => {
  return (
    <div className="dash-cont">
      <div className="nav">
        <Navigation />
      </div>
      <div className="side">
        <div style={{ width: "100%", margn: "0px auto" }}>
          <TopNav title={"Patients"} />
          <div style={{ display: "flex" }}>
            <PatientsCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patients;
