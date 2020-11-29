import React from "react";

import TopNav from "../../TopNav";
import Navigation from "../components/SideNav";

const Dashboard = () => (
  <div className="dash-cont">
    <div className="nav">
      <Navigation />
    </div>
    <div className="side">
      <div style={{ width: "100%", margn: "0px auto" }}>
        <TopNav title={"Dashboard"} />
        <div className="create-form-cont "></div>
      </div>
    </div>
  </div>
);

export default Dashboard;
