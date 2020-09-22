import React, { Component } from "react";
import { connect } from "react-redux";

import { getDoctorsApp } from "../../../store/action";

import one from "../../../img/rename.jpg";

class AppointmentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      det: false,
    };
  }

  componentDidMount() {
    const { getDoctorsApp } = this.props;
    getDoctorsApp();
  }

  handleClick = (id) => {
    this.setState({ det: !this.state.det });
  };
  render() {
    const { det } = this.state;
    const { appointments } = this.props;
    return (
      <>
        {appointments.map((app) => (
          <div key={app._id} className="doc-app-card-cont">
            <div style={{ width: "100%" }} className="doc-hd-card">
              <div
                style={{
                  width: "60px",
                  maxHeight: "60px",
                  overflow: "hidden",
                  borderRadius: "40px",
                }}
              >
                <img style={{ borderRadius: "40px" }} width="100%" src={one} />
              </div>
              <div style={{ marginLeft: "20px" }}>
                <p
                  style={{
                    fontSize: "12px",
                    textTransform: "capitalize",
                    wordBreak: "break-all",
                  }}
                >
                  {app?.user?.firstname} {app?.user?.lastname}
                </p>
                <span>
                  <i
                    style={{ color: "#05a08177", cursor: "pointer" }}
                    className="fas fa-check-circle"
                  ></i>
                  <i
                    style={{
                      marginLeft: "5px",
                      color: "#ED8388",
                      cursor: "pointer",
                    }}
                    className="far fa-times-circle"
                  ></i>
                </span>
              </div>
            </div>
            <div
              style={{ justifyContent: "space-between", marginTop: "30px" }}
              className="doc-hd-card"
            >
              <p style={{ fontSize: "25px" }}>{app?.time}</p>
              <p style={{ fontSize: "12px" }}>{app?.date.slice(0, 10)}</p>
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
                  onClick={() => this.handleClick(app._id)}
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
                    display: det ? "block" : "none",
                    wordBreak: "break-all",
                  }}
                  className="doc-detail"
                >
                  {app.subject}
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default connect(
  (store) => ({
    appointments: store.appointments,
  }),
  { getDoctorsApp }
)(AppointmentCard);
