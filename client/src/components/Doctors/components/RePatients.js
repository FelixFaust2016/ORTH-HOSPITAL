import React, { Component } from "react";
import { connect } from "react-redux";
import { getPatients, getCurrentPatient } from "../../../store/action";

import one from "../../../img/text.jpg";

class RePatients extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getPatients } = this.props;
    getPatients();
  }

  render() {
    const { patients } = this.props;
    return (
      <div id="tb-cont-re" style={{ width: "100%", marginTop: "30px" }}>
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
              <td>Sex</td>
            </tr>
            <br />
            {patients.map((patient) => (
              <>
                <tr key={patient._id} className="re-patient-table-text">
                  <td>
                    <div style={{ position: "relative" }} className="im-row">
                      <div
                        style={{ position: "absolute" }}
                        className="patient-img-table"
                      >
                        <img src={one} />
                      </div>
                      <div style={{ marginLeft: "60px" }}>
                        <h4>
                          {patient.firstname} {patient.lastname}
                        </h4>
                        <p style={{ fontSize: "10px" }}>
                          {patient?.profile?.region || "NAN"}, {patient?.profile?.country || ""}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>{patient?.profile?.phoneNumber || "NAN"}</td>
                  <td>{patient?.profile?.age || "NAN"}</td>
                  <td>{patient?.profile?.gender || "NAN"}</td>
                </tr>
                <br />
              </>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(
  (store) => ({
    patients: store.patients,
  }),
  { getPatients, getCurrentPatient }
)(RePatients);
