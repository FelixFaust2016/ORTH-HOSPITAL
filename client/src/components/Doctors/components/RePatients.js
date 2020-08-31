import React, { Component } from "react";

import one from "../../../img/text.jpg";

class RePatients extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ width: "100%", marginTop: "30px" }}>
        <nav>
          <h5 style={{ textTransform: "uppercase" }}>Recent Patients</h5>
        </nav>
        <br />
        <table className="re-patient-table">
          <tbody>
            <tr className="re-patient-table-hd">
              <td>Patient</td>
              <td>Phone</td>
              <td>Age</td>
              <td>Disease</td>
            </tr>
            <br />
            <tr className="re-patient-table-text">
              <td>
                <div className="im-row">
                  <div className="patient-img-table">
                    <img src={one} />
                  </div>
                  <div style={{ marginLeft: "5px" }}>
                    <h4>Keith Ramon</h4>
                    <p style={{ fontSize: "10px" }}>Enugu, Nigeria</p>
                  </div>
                </div>
              </td>
              <td>09084763723</td>
              <td>28</td>
              <td>Poison Ivy disorder</td>
            </tr>
            <br />
            <tr className="re-patient-table-text">
              <td>
                <div className="im-row">
                  <div className="patient-img-table">
                    <img src={one} />
                  </div>
                  <div style={{ marginLeft: "5px" }}>
                    <h4>Keith Ramon</h4>
                    <p style={{ fontSize: "10px" }}>Enugu, Nigeria</p>
                  </div>
                </div>
              </td>
              <td>09084763723</td>
              <td>28</td>
              <td>Poison Ivy disorder</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default RePatients;
