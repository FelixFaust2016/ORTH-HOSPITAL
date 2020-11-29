import React, { Component } from "react";
import { connect } from "react-redux";
import { getDoctorsApp, approveAppointment } from "../../../store/action";

import one from "../../../img/text.jpg";

class AppBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getDoctorsApp } = this.props;
    getDoctorsApp();
  }

  render() {
    const { appointments } = this.props;
    return (
      <div id="app-boc-can">
        {appointments.map((app) => (
          <div
            style={{
              width: "81%",
              padding: "10px 20px",
              height: "80px",
              display: "flex",
              alignItems: "center",
              // justifyContent: "space-between",
              boxShadow: "1px 1px 5px 0px rgba(0, 0, 0, 0.144)",
              marginTop: "20px",
              borderRadius: "5px",
              cursor: "pointer",
              margin: "20px auto",
            }}
          >
            <div
              style={{
                width: "50px",
                maxHeight: "50px",
                borderRadius: "25px",
                overflow: "hidden",
              }}
            >
              <img width="100%" style={{ borderRadius: "50px" }} src={one} />
            </div>
            <div style={{ marginLeft: "10px" }}>
              <h6>
                {app?.user?.firstname} {app?.user?.lastname}
              </h6>
              <p style={{ fontSize: "10px" }}>
                {app?.date?.slice(0, 10 || "")} at {app?.time || "..."}
              </p>
            </div>
            <div style={{ flex: "1" }}></div>
            <span
              style={{
                color: app?.isApproved === "approved" ? "#05a08177" : "#ED8388",
                fontSize: "10px",
              }}
            >
              {/* <i
                style={{ color: "#05a08177", cursor: "pointer" }}
                className="far fa-check-circle"
              ></i>
              <i
                style={{
                  marginLeft: "5px",
                  color: "#ED8388",
                  cursor: "pointer",
                }}
                className="far fa-times-circle"
              ></i> */}
              {app?.isApproved}
            </span>
          </div>
        ))}
      </div>
    );
  }
}
export default connect(
  (store) => ({
    appointments: store.appointments,
  }),
  { getDoctorsApp, approveAppointment }
)(AppBox);
