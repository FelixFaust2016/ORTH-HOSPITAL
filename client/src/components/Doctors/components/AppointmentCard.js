import React, { Component } from "react";

import one from "../../../img/rename.jpg";

class AppointmentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      det: false,
    };
  }

  handleClick = () => {
    this.setState({ det: !this.state.det });
  };
  render() {
    const { det } = this.state;
    return (
      <div className="doc-app-card-cont">
        <div className="doc-hd-card">
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
          <div style={{ marginLeft: "10px" }}>
            <p style={{ fontSize: "14px" }}>Karin Page</p>
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
          <p style={{ fontSize: "25px" }}>10:30</p>
          <p style={{ fontSize: "14px" }}>22/3/2020</p>
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
              onClick={this.handleClick}
              style={{
                fontSize: "12px",
                cursor: "pointer",
                color: "#05a08177",
              }}
            >
              View Details
            </p>
            <div
              style={{ display: det ? "block" : "none" }}
              className="doc-detail"
            >
              I am having issues with my breathing
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppointmentCard;
