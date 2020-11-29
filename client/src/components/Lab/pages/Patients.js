import React, { Component } from "react";

import { connect } from "react-redux";

import {
  getPatients,
  getCurrentPatient,
  updateAProfile,
  getCurrentTest
} from "../../../store/action";
import TopNav from "../../TopNav";
import Navigation from "../components/SideNav";
import PatientCard from "../components/PatientCard";

class Patients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dit: false,
      det: false,

      weight: "",
      height: "",
      genotype: "",
      bloodGroup: "",
    };
    this.handleDet = this.handleDet.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDit = this.handleDit.bind(this);
  }

  componentDidMount() {
    const { getPatients } = this.props;
    getPatients();
  }

  async handleDit(id) {
    this.setState({ dit: !this.state.dit });
    const { getCurrentPatient } = this.props;
    await getCurrentPatient(id);
    console.log(this.props.pat.tests);
  }

  async handleDet(id) {
    this.setState({ det: !this.state.det });
    const { getCurrentPatient } = this.props;
    await getCurrentPatient(id);
    console.log(this.props.pat.profile._id);
    console.log(id);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  async handleEdit(id) {
    const { weight, height, genotype, bloodGroup } = this.state;
    const { updateAProfile } = this.props;

    await updateAProfile(id, {
      weight: weight,
      height: height,
      genotype: genotype,
      bloodGroup: bloodGroup,
    });
    console.log(id, weight, height, genotype, bloodGroup);
    window.location.reload(false);
  }

  render() {
    const { dit, det } = this.state;
    const { patients, pat } = this.props;
    return (
      <div className="dash-cont">
        {dit && (
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: "4",
              background: "rgba(255, 255, 255, 0.864)",
              width: "100%",
              height: "100vh",
            }}
          >
            {pat.tests.map((tests) => (
              <div>
                {" "}
                <a>{tests.test}</a>
              </div>
            ))}
          </div>
        )}
        {det && (
          <div
            style={{
              position: "absolute",
              position: "fixed",
              background: "#05a081c7",
              height: "100vh",
              width: "100%",
              zIndex: "4",
              top: "0",
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
              <div>
                <h3 style={{ textAlign: "center" }}>Edit Appointment</h3>
                <form>
                  <div className="edit-app">
                    <label>height</label>
                    <br />
                    <input
                      type="text"
                      name="height"
                      className="regionSelect"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="edit-app">
                    <label>weight</label>
                    <br />
                    <input
                      type="text"
                      name="weight"
                      className="regionSelect"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="edit-app">
                    <label>genotype</label>
                    <br />
                    <input
                      type="text"
                      name="genotype"
                      className="regionSelect"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="edit-app">
                    <label>blood group</label>
                    <br />
                    <input
                      type="text"
                      name="bloodGroup"
                      className="regionSelect"
                      onChange={this.handleChange}
                    />
                  </div>
                  <input
                    onClick={() => this.handleEdit(pat.profile._id)}
                    type="button"
                    style={{ marginTop: "20px" }}
                    className="btn"
                    value="Edit"
                  />
                </form>
              </div>
            </div>
          </div>
        )}
        <div className="nav">
          <Navigation />
        </div>
        <div className="side">
          <div style={{ width: "100%", margn: "0px auto" }}>
            <TopNav title={"Patients"} />
            <div
              style={{ flexWrap: "wrap", margin: "0px auto" }}
              className="pt-lb-main-card-cont"
            >
              {patients.map((patient) => (
                <PatientCard
                  key={patient._id}
                  open={() => this.handleDit(patient._id)}
                  firstname={patient?.firstname || ""}
                  lastname={patient?.lastname || ""}
                  height={patient?.profile?.height || "NAN"}
                  weight={patient?.profile?.weight || "NAN"}
                  genotype={patient?.profile?.genotype || "NAN"}
                  bloodGroup={patient?.profile?.bloodGroup || "NAN"}
                  edit={() =>
                    this.handleDet(patient._id || "profile not present")
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (store) => ({
    patients: store.patients,
    pat: store.currentPatient,
    profile: store.currentProfile,
    test : store.currentTests
  }),
  { getPatients, getCurrentPatient, updateAProfile }
)(Patients);
