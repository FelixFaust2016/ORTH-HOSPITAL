import React, { Component } from "react";
import { connect } from "react-redux";

import {
  getAppointments,
  getUserAppointment,
  getCurrentAppointment,
} from "../store/action";

class Appointment extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { getUserAppointment } = this.props;
    getUserAppointment();
  }

  render() {
    const { auth, getAppointments, getUserAppointment } = this.props;

    const appointments = this.props.appointments.map((appointments, i) => (
      <div className="appointment-cont" key={appointments._id}>
        <div>
          <span style={{ fontWeight: "600", fontSize: "10px" }}>
            {appointments.date.slice(0, 10)} BY {appointments.time}
          </span>
          <span className="appp-img-cont">
            <div className="apoint-img">
              <img
                src={`http://localhost:5000/${appointments.doctor.productImage}`}
              />
            </div>
            <div className="ap-tx">
              <h5>
                {appointments.doctor.firstname} {appointments.doctor.lastname}
              </h5>
              <span>{appointments.doctor.category.name}</span>
            </div>
          </span>
        </div>
      </div>
    ));

    return (
      <section style={{ position: "relative" }}>
        <div>
          <main className="hd-app">
            <span className="ap">
              <h4>{appointments.length}</h4>
              <span>Appointment{appointments.length > 1 ? "s" : ""}</span>
            </span>
            <i style={{ cursor: "pointer" }} className="fas fa-arrow-right"></i>
          </main>
          {this.props.appointments.length > 0 ? (
            <div id="api-cont">{appointments}</div>
          ) : (
            <div className="no-app">
              <h1>
                YOU
                <br /> HAVE NO <br />
                APPOINTMENTS
              </h1>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default connect(
  (store) => ({
    auth: store.auth,
    appointments: store.appointments,
  }),
  {
    getAppointments,
    getUserAppointment,
    getCurrentAppointment,
  }
)(Appointment);
