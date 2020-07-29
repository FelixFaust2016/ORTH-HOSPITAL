import React from "react";
import { Redirect } from "react-router-dom";

import Welcome from "../components/Welcome";
import SideNav from "../components/sideNav";
import TopNav from "../components/TopNav";
import Prof from "../components/ProfDash";
import Calendar from "../components/Calendar";
import Appointments from "../components/Appointment";
import Statistics from "../components/DashOver";
import Book from "../components/Book";
import FindDoc from "../components/FindDoc";

const Dashboard = ({ isAuthenticated }) => {
  if (!isAuthenticated) return <Redirect to="/" />;

  return (
    <div className="dash-cont">
      <div className="nav">
        <SideNav />
      </div>
      <div className="side">
        <div style={{ width: "100%", margn: "0px auto" }}>
          <TopNav title={"dashboard"} />
          <div className="main-dash-bd">
            <div className="left-dash-cont">
              <Welcome />
              <Statistics />
              <div className="bttm-dash">
                <Book />
                <FindDoc />
              </div>
            </div>
            <div className="bash-rt">
              <Prof />
              <Appointments />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
