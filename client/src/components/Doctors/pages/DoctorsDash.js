import React from "react";

import Navigation from "../components/SideNav";
import TopNav from "../components/TopNav";
import Appoint from "../components/DocAppointment.";
import one from "../../../img/doc-img/patient.png";
import two from "../../../img/doc-img/appointment.png";
import three from "../../../img/doc-img/review.png";
import AppBox from "../components/AppointmentBox";
import RePatients from "../components/RePatients";

const DoctorsDash = () => {
  return (
    <div className="dash-cont">
      <div className="nav">
        <Navigation />
      </div>
      <div className="side">
        <div style={{ width: "100%", margn: "0px auto" }}>
          <TopNav title={"overview"} />
          <div className="doctor-over-stat-cont">
            <div style={{ width: "65%" }}>
              <div className="doctor-over-stat">
                <div>
                  <aside className="doctor-patients-img">
                    <img src={one} />
                  </aside>
                  <aside className="doctor-patients-text">
                    <h1>42</h1>
                    <p>Number of Patients</p>
                  </aside>
                </div>
                <div>
                  <aside className="doctor-patients-img">
                    <img src={two} />
                  </aside>
                  <aside className="doctor-patients-text">
                    <h1>30</h1>
                    <p>Total Appointments</p>
                  </aside>
                </div>
                <div>
                  <aside className="doctor-patients-img">
                    <img src={three} />
                  </aside>
                  <aside className="doctor-patients-text">
                    <h1>60</h1>
                    <p>Recent Reviews</p>
                  </aside>
                </div>
              </div>
              <div>
                <RePatients />
              </div>
            </div>
            <div className="doctor-bash-rt">
              <Appoint />
              <AppBox />
              <AppBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsDash;
