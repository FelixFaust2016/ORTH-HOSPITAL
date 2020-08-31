import React from "react";

import Navigation from "../components/SideNav";
import TopNav from "../components/TopNav";

const Settings = () => {
  return (
    <div className="dash-cont">
      <div className="nav">
        <Navigation />
      </div>
      <div className="side">
        <div style={{ width: "100%", margn: "0px auto" }}>
          <TopNav title={"Settings"} />
          {/* <Navigation /> */}
        </div>
      </div>
    </div>
  );
};

export default Settings;
