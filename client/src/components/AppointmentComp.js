import React, { Component } from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";

import "react-datepicker/dist/react-datepicker.css";

import { createAppointment, getDoctors } from "../store/action";
import { withRouter } from "react-router-dom";

class AppointmentComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctorId: "",
      subject: "",
      date: "",
      time: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.onTimeChange = this.onTimeChange.bind(this);
  }
  componentDidMount() {
    const { getDoctors } = this.props;
    getDoctors();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSelect(e) {
    this.setState({ doctorId: e.target.value });
  }

  onTimeChange = (time) => this.setState({ time: time });

  handleDate = (date) => {
    this.setState({
      date: date,
    });
  };

  handleSubmit(e) {
    // e.preventDefault();

    const appoint = {
      doctorId: this.state.doctorId,
      subject: this.state.subject,
      date: this.state.date,
    };

    console.log(this.state);
    this.props.createAppointment(this.state);
  }

  render() {
    const { doctorId, subject, date, time } = this.state;
    console.log("PROPS: ", this.props);
    const doctors = this.props.doctors
      .filter((doc) => doc.category._id === this.props.cat)
      .map((doctor) => (
        <option value={doctor._id} key={doctor._id}>
          Dr. {doctor.firstname} {doctor.lastname}
        </option>
      ));
    return (
      <form
        style={{ padding: "10px 10px" }}
        className="book-inputs"
        onSubmit={this.handleSubmit}
      >
        {/* <h1 style={{ textAlign: "center", paddingBottom: "20px" }}>
            BOOK APPOINTMENT
          </h1> */}
        <div
          style={{
            width: "450px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <label>choose doctor</label>
            <br />
            <select
              className="book-select"
              onChange={this.handleSelect}
              value={doctorId}
              name="doctorId"
              label="doctors"
            >
              <optgroup label="doctors">{doctors}</optgroup>
            </select>
          </div>

          {/* <div> */}
          <div>
            <label>choose date</label> <br />
            <DatePicker
              selected={date}
              onChange={this.handleDate}
              placeholderText="click to select"
              className="red-border"
            />
          </div>
          <div>
            <label>choose time</label> <br />
            <TimePicker
              className="book-select"
              type="time"
              onChange={this.onTimeChange}
              value={time}
              name="time"
              width="100%"
            />
          </div>
        </div>
        {/* </div> */}
        <div style={{ marginTop: "10px" }}>
          <label>Talk a bit about your problem</label>
          <br />
          <textarea
            className="book-textera"
            rows={"7"}
            type="text"
            value={subject}
            name="subject"
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            required
          />
        </div>
        <div>
          <button className="book-btn" type="submit">
            Book appointment
          </button>
        </div>
      </form>
    );
  }
}

export default connect(
  (store) => ({
    doctors: store.doctors,
  }),
  { createAppointment, getDoctors }
)(withRouter(AppointmentComp));
