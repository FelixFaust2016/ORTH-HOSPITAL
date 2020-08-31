import React from "react";

import Navigation from "../components/SideNav";
import TopNav from "../components/TopNav";
import AppointmentCard from "../components/AppointmentCard";

const Appointments = () => {
  return (
    <div className="dash-cont">
      <div className="nav">
        <Navigation />
      </div>
      <div className="side">
        <div style={{ width: "100%", margn: "0px auto" }}>
          <TopNav title={"Appointments"} />
          {/* <Navigation /> */}
          <div style={{ display: "flex" }}>
            <AppointmentCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
