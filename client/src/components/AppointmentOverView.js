import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getUserAppointment, deleteAppointment } from "../store/action";
import Button from "./Button";
import Modal from "./Modal";

class AppointmentOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { getUserAppointment } = this.props;
    getUserAppointment();
  }

  handleModal = () => {
    this.setState({ modal: true });
  };

  closeModal = () => {
    this.setState({ modal: false });
  };

  handleDelete(id) {
    this.props.deleteAppointment(id);
    window.location.reload(false)
  }

  render() {
    const { appointments } = this.props;

    const appointment = appointments.map((appointment) => (
      <tr key={appointment._id}>
        <td>
          <div className="app-card-img">
            <img
              src={`http://localhost:5000/${appointment.doctor.productImage}`}
            />
          </div>
        </td>
        <td>
          {appointment.doctor.firstname} {appointment.doctor.lastname}{" "}
        </td>
        <td>{appointment.doctor.category.name}</td>
        <td>{appointment.date.slice(0, 10)}</td>
        <td>{appointment.time}</td>
        <td>{appointment.isApproved ? "approved" : "pending..."}</td>
        <td>
          <button
            onClick={() => this.handleDelete(appointment._id)}
            style={{
              textTransform: "uppercase",
              color: "#ED8388",
              cursor: "pointer",
              border: "none",
              fontSize: "12px",
              background: "white",
              outline: "none",
            }}
          >
            cancel
          </button>
        </td>
      </tr>
    ));

    return (
      <div
        style={{
          width: "100%",
        }}
      >
        {this.state.modal ? (
          <div
            onClick={this.closeModal}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100vh",
              zIndex: "2",
              position: "absolute",
              position: "fixed",
              background: "#05a08177",
              top: "0%",
              left: "0%",
            }}
          ></div>
        ) : null}{" "}
        {this.state.modal ? (
          <div
            className="mod"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "500px",
              padding: "20px",
              zIndex: "3",
              position: "absolute",
              position: "fixed",
              background: "none",
              top: "50%",
              left: "50%",
            }}
          >
            <Modal />
          </div>
        ) : null}
        <nav className="app-nav">
          <h3>
            {this.props.appointments.length === 1
              ? "RECENT APPOINTMENT"
              : "RECENT APPOINTMENTS"}
          </h3>
          <div onClick={this.handleModal}>
            <Button
              value={
                <span>
                  <i
                    style={{ paddingRight: "10px" }}
                    className="fas
                     fa-user-plus"
                  ></i>{" "}
                  add new
                </span>
              }
            />
          </div>
        </nav>
        <table className="tb-app">
          <tbody>
            <tr style={{ textTransform: "uppercase" }}>
              <td></td>
              <td>name</td>
              <td>category</td>
              <td>date</td>
              <td>time</td>
              <td>status</td>
              <td></td>
            </tr>
            {appointment}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(
  (store) => ({
    appointments: store.appointments,
  }),
  { getUserAppointment, deleteAppointment }
)(AppointmentOverview);
