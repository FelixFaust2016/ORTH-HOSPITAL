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
      dit: false,
      dot: false,
      status: "pending",

      date: "",
      time: "",
      comment: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleComment = this.handleComment.bind(this)
    this.handleCommentPut= this.handleCommentPut.bind(this)
  }

  async handleClick(id) {
    this.setState({ det: !this.state.det });
    const { getAAppointment } = this.props;
    await getAAppointment(id);
    console.log(this.props.app);
  }

  async handleSub(id) {
    this.setState({ dit: !this.state.det });
    const { getAAppointment } = this.props;
    await getAAppointment(id);
    console.log(this.props.app);
  }

  async handleComment(id) {
    this.setState({ dot: !this.state.det });
    const { getAAppointment } = this.props;
    await getAAppointment(id);
    console.log(this.props.app);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  async handleEdit(id) {
    const { date, time, comment } = this.state;
    const { approveAppointment } = this.props;

    await approveAppointment(id, { date: date, time: time, comment: comment });
    console.log(id, date, time, comment);
    window.location.reload(false);
  }

  async handleCommentPut(id) {
    const { comment } = this.state;
    const { approveAppointment } = this.props;

    await approveAppointment(id, { comment: comment });
    console.log("comment")
    window.location.reload(false);
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
    this.setState({ dit: false });
    this.setState({ dot: false });
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
    const { det, dit, dot } = this.state;
    const { appointments, app } = this.props;
    return (
      <div className="dash-cont">
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
                <p>{app?.subject}</p>
              </div>
            </div>
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
              <div>
                <h3 style={{ textAlign: "center" }}>Edit Appointment</h3>
                <form>
                  <div className="edit-app">
                    <label>date</label>
                    <br />
                    <input
                      type="date"
                      name="date"
                      className="regionSelect"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="edit-app">
                    <label>time</label>
                    <br />
                    <input
                      type="time"
                      name="time"
                      className="regionSelect"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="edit-app">
                    <label>comment</label>
                    <br />
                    <textarea
                      rows="5"
                      type="text"
                      name="comment"
                      className="regionSelect"
                      onChange={this.handleChange}
                    />
                  </div>
                  <input
                    onClick={() => this.handleEdit(app._id)}
                    type="button"
                    style={{ marginTop: "20px" }}
                    className="btn"
                    value="Finalize Appointment"
                  />
                </form>
              </div>
            </div>
          </div>
        )}
        {dot && (
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
              <div>
                <h3 style={{ textAlign: "center" }}>Edit Appointment</h3>
                <form>
                  <div className="edit-app">
                    <label>comment</label>
                    <br />
                    <textarea
                      rows="5"
                      type="text"
                      name="comment"
                      className="regionSelect"
                      onChange={this.handleChange}
                    />
                  </div>
                  <input
                    onClick={() => this.handleCommentPut(app._id)}
                    type="button"
                    style={{ marginTop: "20px" }}
                    className="btn"
                    value="Comment"
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
            <TopNav title={"Appointments"} />
            <div
              style={{
                width: "90%",
                display: "flex",
                flexWrap: "wrap",
                //
                margin: "10px auto",
              }}
            >
              {console.log("all", appointments)}
              {appointments.map((app) => (
                <AppointmentCard
                  key={app._id}
                  firstname={app.user.firstname}
                  lastname={app.user.lastname}
                  time={app?.time || "pending..."}
                  date={app?.date?.slice(0, 10) || "pending..."}
                  subject={app.subject}
                  click={() => this.handleClick(app._id)}
                  subClick={() => this.handleSub(app._id)}
                  comment={()=> this.handleComment(app._id)}
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
