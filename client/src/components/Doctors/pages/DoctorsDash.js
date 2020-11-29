import React, { Component } from "react";
import { connect } from "react-redux";

import { getDoctorsApp } from "../../../store/action";
import { getPatients } from "../../../store/action";

import Navigation from "../components/SideNav";
import TopNav from "../components/TopNav";
import Appoint from "../components/DocAppointment.";
import one from "../../../img/doc-img/patient.png";
import two from "../../../img/doc-img/appointment.png";
import three from "../../../img/doc-img/review.png";
import AppBox from "../components/AppointmentBox";
import RePatients from "../components/RePatients";

class DoctorsDash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getDoctorsApp, getPatients } = this.props;
    getDoctorsApp();
    getPatients();
  }

  render() {
    const { patients, appointments } = this.props;
    return (
      <div className="dash-cont">
        <div className="nav">
          <Navigation />
        </div>
        <div className="side">
          <div style={{ width: "100%", margn: "0px auto" }}>
            <TopNav title={"overview"} />
            <div className="doctor-over-stat-cont">
              <div style={{ width: "65%", flexWrap: "wrap" }}>
                <div className="doctor-over-stat">
                  <div>
                    <aside className="doctor-patients-img">
                      <img src={one} />
                    </aside>
                    <aside className="doctor-patients-text">
                      <h1>{patients.length}</h1>
                      <p>Number of Patients</p>
                    </aside>
                  </div>
                  <div>
                    <aside className="doctor-patients-img">
                      <img src={two} />
                    </aside>
                    <aside className="doctor-patients-text">
                      <h1>{appointments.length}</h1>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  (store) => ({
    patients: store.patients,
    appointments: store.appointments,
  }),
  { getPatients, getDoctorsApp }
)(DoctorsDash);
