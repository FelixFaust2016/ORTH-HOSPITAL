import React, { Component } from "react";
import { connect } from "react-redux";

import {
  getAppointments,
  getUserAppointment,
  getCurrentAppointment,
  getDoctors,
} from "../store/action";

import one from "../img/stat-dash/app.png";
import two from "../img/stat-dash/doc.png";
import three from "../img/stat-dash/err.png";

class DashOver extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getUserAppointment, getDoctors } = this.props;
    getUserAppointment();
    getDoctors();
  }

  render() {
    const { appointments, doctors } = this.props;
    return (
      <div className="stat-cont">
        <div className="stati">
          <div>
            <img src={one} />
          </div>
          <main>
            <h1>{appointments.length}</h1>
            <p>Appointments</p>
          </main>
        </div>
        <div className="stati">
          <div>
            <img src={two} />
          </div>
          <main>
            <h1>{doctors.length}</h1>
            <p>Doctors</p>
          </main>
        </div>
        <div className="stati">
          <div>
            <img src={three} />
          </div>
          <main>
            <h1>0</h1>
            <p>Cancled</p>
          </main>
        </div>
      </div>
    );
  }
}

export default connect(
  (store) => ({
    auth: store.auth,
    appointments: store.appointments,
    doctors: store.doctors,
  }),
  {
    getAppointments,
    getUserAppointment,
    getCurrentAppointment,
    getDoctors,
  }
)(DashOver);
