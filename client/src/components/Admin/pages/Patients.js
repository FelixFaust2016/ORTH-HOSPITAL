import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import img from "../../../img/text.jpg";

import { getPatients, getCurrentPatient } from "../../../store/action";

import Navigation from "../component/SlideNav";
import TopNav from "../../TopNav";
import PatientsCards from "../../Doctors/components/PatientsCards";

class Patients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dit: false,
      switchTab: false,
      editStatus: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick(id) {
    const { getCurrentPatient } = this.props;
    await getCurrentPatient(id);
    this.setState({ dit: true });
    console.log(id);

    console.log(this.props.pat);
  }

  handleClose = () => {
    this.setState({ dit: false });
  };

  componentDidMount() {
    const { getPatients } = this.props;
    getPatients();
  }

  handleSwitchTrue = () => {
    this.setState({ switchTab: true });
  };

  handleSwitchFalse = () => {
    this.setState({ switchTab: false });
  };

  handleEditStatus = () => {
    this.setState({ editStatus: true });
  };

  render() {
    const { dit, switchTab, editStatus } = this.state;
    const { patients, pat } = this.props;

    return (
      <div className="dash-cont">
        <div>
        {editStatus && (
          <div
            style={{
              position: "absolute",
              position: "fixed",
              background: "#05a081c7",
              height: "100vh",
              width: "100%",
              zIndex: "3",
              top: "0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {console.log(this.props.patients, "hhhhhhhhhhhhh")}
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
            </div>)}
        </div>
        <div>
          {dit && (
            <div
              style={{
                position: "absolute",
                position: "fixed",
                background: "#05a081c7",
                height: "100vh",
                width: "100%",
                zIndex: "3",
                top: "0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {console.log(this.props.patients, "hhhhhhhhhhhhh")}
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
                  padding: "30px 20px",
                  background: "white",
                  borderRadius: "5px",
                }}
              >
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    overflow: "hidden",
                    borderRadius: "70px",
                    margin: "10px auto",
                  }}
                >
                  <img width="100%" src={img} />
                </div>
                <div className="pat">
                  <div className="pat-text">
                    <div className="pat-txt">
                      <h6>NAME</h6>
                      <p>
                        {pat.firstname} {pat.lastname}
                      </p>
                    </div>
                    <div className="pat-txt">
                      <h6>AGE</h6>
                      <p>{pat?.profile?.age || "NAN"} years old</p>
                    </div>
                    <div className="pat-txt">
                      <h6>DATE OF BIRTH</h6>
                      <p>{pat?.profile?.DOB?.slice(0, 10) || "NAN"}</p>
                    </div>
                    <div className="pat-txt">
                      <h6>PHONE NUMBER</h6>
                      <p>{pat?.profile?.phoneNumber || "NAN"}</p>
                    </div>
                    <div className="pat-txt">
                      <h6>GENDER</h6>
                      <p>{pat?.profile?.gender || "NAN"}</p>
                    </div>
                    <div className="pat-txt">
                      <h6>GENOTYPE</h6>
                      <p style={{ textTransform: "uppercase" }}>
                        {pat?.profile?.genotype || "NAN"}
                      </p>
                    </div>
                    <div className="pat-txt">
                      <h6>BLOOD GROUP</h6>
                      <p>{pat?.profile?.bloodGroup || "NAN"}</p>
                    </div>
                    <div className="pat-txt">
                      <h6>ADDRESS</h6>
                      <p>{pat?.profile?.address || "NAN"}</p>
                    </div>
                    <div className="pat-txt">
                      <h6>NEXT OF KIN ADDRESS</h6>
                      <p>{pat?.profile?.nextOffKinAddress || "NAN"}</p>
                    </div>
                    <div className="pat-txt">
                      <h6>NEXT OF KIN PHONE NUMBER</h6>
                      <p>{pat?.profile?.nextOffKinPhoneNumber || "NAN"}</p>
                    </div>
                    <div className="pat-txt">
                      <h6>COUNTRY</h6>
                      <p>{pat?.profile?.country || "NAN"}</p>
                    </div>
                    <div className="pat-txt">
                      <h6>REGION</h6>
                      <p>{pat?.profile?.region || "NAN"}</p>
                    </div>
                    <div className="pat-txt">
                      <h6>WEIGHT</h6>
                      <p>{pat?.profile?.weight || "NAN"}kg</p>
                    </div>
                    <div className="pat-txt">
                      <h6>HEIGHT</h6>
                      <p>{pat?.profile?.height || "NAN"} feet</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="nav">
          <Navigation />
        </div>
        <div className="side">
          <div style={{ width: "100%", margn: "0px auto" }}>
            <TopNav title={"Patients"} />
            <div
              className="pt-tab"
              style={{
                width: "60%",
                margin: "20px auto 0px  auto",
                height: "20px",
                // border: "1px solid var(--primary)",
                background: "white",
                display: "flex",
                textAlign: "center",
                fontSize: "12px",
              }}
            >
              <div
                style={{
                  background: switchTab === false && "var(--primary)",
                  color: switchTab === false && "white",
                }}
                onClick={this.handleSwitchFalse}
              >
                Out-Patient
              </div>
              <div
                onClick={this.handleSwitchTrue}
                style={{
                  background: switchTab === true && "var(--primary)",
                  color: switchTab === true && "white",
                }}
              >
                In-Patient
              </div>
            </div>
            {switchTab === false ? (
              <div
                style={{
                  width: "95%",
                  margin: "0px auto",
                  // justifyContent: "center",
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {patients
                  .filter((pat) => pat.status === "out-patient")
                  .map((patient) => (
                    <div style={{ marginLeft: "10px" }}>
                      <PatientsCards
                        key={patient._id}
                        firstname={patient?.firstname || "NAN"}
                        lastname={patient?.lastname || "NAN"}
                        email={patient?.email || "NAN"}
                        age={patient?.profile?.age || "NAN"}
                        DOB={patient?.profile?.DOB || "NAN"}
                        phoneNumber={patient?.profile?.phoneNumber || "NAN"}
                        click={() => this.handleClick(patient._id)}
                      />
                    </div>
                  ))}
              </div>
            ) : (
              <div
                style={{
                  width: "95%",
                  margin: "0px auto",
                  // justifyContent: "center",
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {patients
                  .filter((pat) => pat.status === "in-patient")
                  .map((patient) => (
                    <div style={{ marginLeft: "10px" }}>
                      <PatientsCards
                        key={patient._id}
                        firstname={patient?.firstname || "NAN"}
                        lastname={patient?.lastname || "NAN"}
                        email={patient?.email || "NAN"}
                        age={patient?.profile?.age || "NAN"}
                        DOB={patient?.profile?.DOB || "NAN"}
                        phoneNumber={patient?.profile?.phoneNumber || "NAN"}
                        click={() => this.handleClick(patient._id)}
                      />
                    </div>
                  ))}
              </div>
            )}
            {console.log(patients, "kdkkdkd")}
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
  }),
  { getPatients, getCurrentPatient }
)(withRouter(Patients));
