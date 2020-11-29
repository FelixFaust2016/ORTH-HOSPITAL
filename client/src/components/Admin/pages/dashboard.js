import React from "react";

import Navigation from "../component/SlideNav";
import TopNav from "../../TopNav";

const Dashboard = () => {
  return (
    <div className="dash-cont">
      <div className="nav">
        <Navigation />
      </div>
      <div className="side">
        <div style={{ width: "100%", margn: "0px auto" }}>
          <TopNav title={"Dashboard"} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
