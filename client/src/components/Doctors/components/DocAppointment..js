import React, { Component } from "react";

class DocAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h4>Appointment</h4>
        <span style={{ fontSize: "12px", cursor: "pointer" }}>
          <span style={{ color: "grey" }}>view all</span>
          <i
            style={{ color: "grey", marginLeft: "5px", fontSize: "10px" }}
            className="fas fa-arrow-right"
          ></i>
        </span>
      </div>
    );
  }
}

export default DocAppointment;
