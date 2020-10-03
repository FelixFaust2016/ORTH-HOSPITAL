import React, { Component } from "react";
import { connect } from "react-redux";

import {
  getDoctorsApp,
  getAAppointment,
  approveAppointment,
} from "../../../store/action";
import Navigation from "../components/SideNav";
import TopNav from "../components/TopNav";
import AppointmentCard from "../components/AppointmentCard";

class Appointments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      det: false,
      status: "pending",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick(id) {
    this.setState({ det: !this.state.det });
    const { getAAppointment } = this.props;
    await getAAppointment(id);
    console.log(this.props.app);
  }

  async handleApprove(id) {
    const { approveAppointment } = this.props;
    await approveAppointment(id, { isApproved: "approved" });
    console.log(this.props.app);
    window.location.reload(false);
  }

  async handleCancel(id) {
    const { approveAppointment } = this.props;
    await approveAppointment(id, { isApproved: "canceled" });
    console.log(this.props.app);
    window.location.reload(false);
  }

  handleClose = () => {
    this.setState({ det: false });
  };

  componentDidMount() {
    const { getDoctorsApp } = this.props;
    getDoctorsApp();
  }

  // componentDidUpdate(prevProps, prevState){
    
  //   const { getDoctorsApp } = this.props;
  //   if(app.isApproved)
  //   // getDoctorsApp();
  // }

  render() {
    console.log(this.props.app);
    const { det } = this.state;
    const { appointments, app } = this.props;
    return (
      <div className="dash-cont">
        {det && (
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
              <div style={{ textAlign: "center" }}>
                <h3>Description</h3>
                {app.subject}
              </div>
            </div>
          </div>
        )}
        <div className="nav">
          <Navigation />
        </div>
        <div className="side">
          <div style={{ width: "100%", margn: "0px auto" }}>
            <TopNav title={"Appointments"} />
            <div
              style={{
                width: "90%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                margin: "10px auto",
              }}
            >
              {console.log("all", appointments)}
              {appointments.map((app) => (
                <AppointmentCard
                  key={app._id}
                  firstname={app.user.firstname}
                  lastname={app.user.lastname}
                  time={app.time}
                  date={app.date.slice(0, 10)}
                  subject={app.subject}
                  click={() => this.handleClick(app._id)}
                  status={app.isApproved}
                  approve={() => this.handleApprove(app._id)}
                  cancel={() => this.handleCancel(app._id)}
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
    appointments: store.appointments,
    app: store.currentAppointment,
  }),
  { getDoctorsApp, getAAppointment, approveAppointment }
)(Appointments);
