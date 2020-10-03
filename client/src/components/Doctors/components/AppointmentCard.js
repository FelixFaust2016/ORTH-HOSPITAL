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
      <>
        <div
          style={{
            transition: "0.5s ease-in-out",
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
                    className="fas fa-check-circle"
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
                View Details
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
      </>
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
