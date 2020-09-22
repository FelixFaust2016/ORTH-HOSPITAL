import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import SideNav from "../components/sideNav";
import TopNav from "../components/TopNav";
import ProfileComp from "../components/ProfileComponent";
import ProfOverview from "../components/ProfileOverView";

const Profile = ({ isAuthenticated }) => {
  const [state, setState] = useState(true);
  console.log(state);
  if (!isAuthenticated) return <Redirect to="/" />;

  return (
    <div className="dash-cont">
      <main className="nav">
        <SideNav />
      </main>
      <div className="side">
        <div style={{ width: "100%", margn: "0px auto" }}>
          <TopNav title={"Profile"} />
          {state ? (
            <ProfOverview shouldHide={setState} />
          ) : (
            <ProfileComp shouldHide={setState} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
