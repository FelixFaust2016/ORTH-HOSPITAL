import React, { Component } from "react";
import { connect } from "react-redux";

import one from "../../../img/rename.jpg";

class AppointmentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      det: false,
      status: this.props.status,
    };
  }

  handleHide = () => {
    this.setState({ det: !this.state.det });
  };

  handleClose = () => {
    this.setState({ det: false });
  };

  // componentDidUpdate(prevState, prevProps) {
  //   console.log(this.state.status, this.props.app.isApproved);
  //   if (this.state.status !== this.props.app.isApproved) {
  //     this.setState({
  //       status: this.props.app.isApproved,
  //     });
  //   }
  // }

  render() {
    const { det } = this.state;
    return (
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "relative",
            right: "10px",
            top: "10px",
            cursor: "pointer",
            width: "100%",
            zIndex: "1",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              fontWeight: "600",
              position: "absolute",
              right: "30px",
              top: "20px",
            }}
            onClick={this.handleHide}
          >
            click
          </span>
          {det && (
            <div
              className="dr-hv"
              style={{
                position: "absolute",
                width: "200px",
                padding: "10px 10px",
                fontSize: "10px",
                boxShadow: " 0 10px 8px rgba(0, 0, 0, 0.076)",
                background: "white",
              }}
            >
              <div style={{ cursor: "pointer" }} onClick={this.props.comment}>
                comment
              </div>
              <div style={{ cursor: "pointer" }} onClick={this.props.subClick}>
                view description
              </div>
              <div>
                <a
                  style={{
                    cursor: "pointer",
                    color: "black",
                    textDecoration: "none",
                  }}
                  href="https://gmail.com/"
                >
                  send prescription through mail
                </a>
              </div>
            </div>
          )}
        </div>
        <div
          onClick={this.handleClose}
          style={{
            transition: "0.5s ease-in-out",
            margin: "20px 30px",
          }}
          className="doc-app-card-cont"
        >
          <div style={{ width: "100%" }} className="doc-hd-card">
            <div
              style={{
                width: "60px",
                maxHeight: "60px",
                overflow: "hidden",
                borderRadius: "40px",
                position: "absolute",
              }}
            >
              <img style={{ borderRadius: "40px" }} width="100%" src={one} />
            </div>
            <div style={{ marginLeft: "80px" }}>
              <p
                style={{
                  fontSize: "12px",
                  textTransform: "capitalize",
                  wordBreak: "break-all",
                }}
              >
                {this.props.firstname} {this.props.lastname}
              </p>
              <span style={{ display: "flex" }}>
                {this.state.status === "approved" ? (
                  <p style={{ fontSize: "10px", color: " #05a08177" }}>
                    approved
                  </p>
                ) : (
                  <i
                    onClick={this.props.approve}
                    style={{
                      color: "#05a08177",
                      cursor: "pointer",
                      fontSize: "16px",
                    }}
                    className="far fa-check-circle"
                  ></i>
                )}
                {this.state.status === "canceled" ? (
                  <p
                    style={{
                      fontSize: "10px",
                      color: "#eb5042",
                      marginLeft: "5px",
                    }}
                  >
                    canceled
                  </p>
                ) : (
                  <i
                    onClick={this.props.cancel}
                    style={{
                      marginLeft: "5px",
                      color: "#ED8388",
                      cursor: "pointer",
                      fontSize: "16px",
                    }}
                    className="far fa-times-circle"
                  ></i>
                )}
              </span>
            </div>
          </div>
          <div
            style={{ justifyContent: "space-between", marginTop: "30px" }}
            className="doc-hd-card"
          >
            <p style={{ fontSize: "25px" }}>{this.props.time}</p>
            <p style={{ fontSize: "12px" }}>{this.props.date}</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "30px",
            }}
            className="doc-footer"
          >
            <div style={{ textAlign: "center" }}>
              <p
                onClick={this.props.click}
                style={{
                  fontSize: "12px",
                  cursor: "pointer",
                  color: "#05a08177",
                }}
              >
                Set Appointment
              </p>
              <div
                style={{
                  opacity: det ? "1" : "0",
                  wordBreak: "break-all",
                  transition: "0.5s ease-in-out",
                }}
                className="doc-detail"
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (store) => ({
    appointments: store.appointments,
    app: store.currentAppointment,
  }),
  {}
)(AppointmentCard);
