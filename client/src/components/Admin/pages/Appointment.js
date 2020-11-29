import React, { Component } from "react";

import { connect } from "react-redux";

import { getAppointments, getAAppointment } from "../../../store/action";

import Navigation from "../component/SlideNav";
import TopNav from "../../TopNav";
import AppCard from "../component/AppointmentCard";
import Det from "../component/AppointDet";

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      det: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const { getAppointments } = this.props;
    await getAppointments();
  }

  async handleClick(id) {
    this.setState({ det: !this.state.det });
    const { getAAppointment } = this.props;
    await getAAppointment(id);
    console.log(this.props.app);
  }

  handleClose = () => {
    this.setState({ det: false });
  };

  render() {
    const { det } = this.state;
    const { appointment, app } = this.props;
    console.log(appointment);
    console.log(app);
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
                <h3>Details</h3>
                <Det
                  docfirstname={app?.doctor?.user?.firstname}
                  doclastname={app?.doctor?.user?.lastname}
                  time={app?.time}
                  date={app?.date?.slice(0, 10)}
                  subject={app?.subject}
                />
              </div>
            </div>
          </div>
        )}
        <div className="nav">
          <Navigation />
        </div>
        <div className="side">
          <div style={{ width: "100%", margn: "0px auto" }}>
            <TopNav title={"Appointment"} />
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {appointment.map((app) => (
                <AppCard
                  key={app?._id}
                  firstname={app?.user?.firstname}
                  lastname={app?.user?.lastname}
                  date={app?.date.slice(0, 10)}
                  time={app?.time}
                  status={app?.isApproved}
                  click={() => this.handleClick(app?._id)}
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
    appointment: store.appointments,
    app: store.currentAppointment,
  }),
  { getAppointments, getAAppointment }
)(Appointment);
