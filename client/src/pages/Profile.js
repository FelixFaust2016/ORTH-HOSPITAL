import React from "react";
import { Redirect } from "react-router-dom";

import SideNav from "../components/sideNav";
import TopNav from "../components/TopNav";
import ProfileComp from "../components/Profile";
import ProfileOverview from "../components/ProfileOverView";
import ProfOverview from "../components/ProfileOverView";

const Profile = ({ isAuthenticated }) => {
  if (!isAuthenticated) return <Redirect to="/" />;

  return (
    <div className="dash-cont">
      <main className="nav">
        <SideNav />
      </main>
      <div className="side">
        <div style={{ width: "100%", margn: "0px auto" }}>
          <TopNav title={"Profile"} />
          {/* <ProfileComp/> */}
          <ProfOverview />
        </div>
      </div>
    </div>
  );
};

export default Profile;
