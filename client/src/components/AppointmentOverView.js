import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  getUserAppointment,
  deleteAppointment,
  getAAppointment,
} from "../store/action";
import Button from "./Button";
import Modal from "./Modal";

import app from "../img/app-page.svg";

class AppointmentOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      det: false,
      modal: false,
      appointments: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const { getUserAppointment } = this.props;
    getUserAppointment();
  }

  handleModal = () => {
    this.setState({ modal: true });
  };

  closeModal = () => {
    this.setState({ modal: false });
  };

  async handleDelete(id) {
    await this.props.deleteAppointment(id);
    window.location.reload(false);
  }

  async handleClick(id) {
    this.setState({ det: !this.state.det });
    const { getAAppointment } = this.props;
    await getAAppointment(id);
    console.log(this.props.app);
  }

  handleClose = () => {
    this.setState({ det: false });
  };

  render() {
    const { appointments, app } = this.props;
    const { det } = this.state;
    console.log(appointments, "+++++++++++++++");
    const appointment = appointments.map((appointment) => (
      <tr key={appointment._id}>
        <td>
          <div className="app-card-img">
            <img
              src={`http://localhost:5000/${appointment.doctor.productImage}`}
            />
          </div>
        </td>
        <td style={{ textTransform: "capitalize" }}>
          {appointment.doctor.user.firstname} {appointment.doctor.user.lastname}{" "}
        </td>
        <td>{appointment.doctor.category.name}</td>
        <td>{appointment?.date?.slice(0, 10) || "pending..."}</td>
        <td>{appointment?.time || "pending..."}</td>
        <td>{appointment.isApproved}</td>
        <td>
          <button
            onClick={() => this.handleClick(appointment._id)}
            style={{
              textTransform: "uppercase",
              color: "var(--primary)",
              cursor: "pointer",
              border: "none",
              fontSize: "12px",
              background: "white",
              outline: "none",
            }}
          >
            view
          </button>
        </td>
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
        {det && (
          <div
            style={{
              position: "absolute",
              position: "fixed",
              background: "#05a081c7",
              height: "100vh",
              width: "100%",
              zIndex: "3",
              top: "0",
              left: "0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <i
              onClick={this.handleClose}
              style={{
                position: "absolute",
                top: "50px",
                right: "50px",
                color: "white",
                fontSize: "20px",
                cursor: "pointer",
              }}
              className="fas fa-times"
            ></i>
            <div
              style={{
                width: "500px",
                padding: "20px",
                background: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <h3>Doctors Comment</h3>
                <p>{app?.comment || "'no comment for Know'"}</p>
              </div>
            </div>
          </div>
        )}
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
            <Modal close={this.closeModal} />
          </div>
        ) : null}
        {this.props.appointments.length === 0 ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "90vh",
            }}
          >
            <div>
              <div style={{ width: "40%", margin: "0px auto" }}>
                <img style={{ width: "100%", margin: "0px auto" }} src={app} />
              </div>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  textAlign: "center",
                }}
              >
                Book An Appointment in a fast and effective way
              </p>
              <div
                onClick={this.handleModal}
                style={{ margin: "10px auto", width: "17%" }}
              >
                <Button
                  value={
                    <span>
                      <i
                        style={{ paddingRight: "10px" }}
                        className="fas
                     fa-user-plus"
                      ></i>{" "}
                      book appointment
                    </span>
                  }
                />
              </div>
            </div>
          </div>
        ) : (
          <div>
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
                  <td>comment</td>
                  <td></td>
                </tr>
                {appointment}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  (store) => ({
    appointments: store.appointments,
    app: store.currentAppointment,
  }),
  { getUserAppointment, deleteAppointment, getAAppointment }
)(AppointmentOverview);
