import React, { Component } from "react";
import { connect } from "react-redux";

import { getPatients, getCurrentPatient } from "../../../store/action";

import one from "../../../img/text.jpg";

class PatientsCards extends Component {
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
      <>
        <div className="pt-card-cont">
          <div className="pt-img-cont">
            <img style={{ width: "100%" }} src={one} />
          </div>
          <i onClick={this.props.click} className="fas fa-ellipsis-v pt-i"></i>
          <div className="pt-text">
            <p>NAME</p>
            <span style={{textTransform:'capitalize', fontWeight:'600'}}>
               {this.props.firstname} {this.props.lastname}
            </span>
            <p>Age</p>
            <span>{this.props.age} years old</span>
            <p>DATE OF BIRTH</p>
            <span>{this.props.DOB.slice(0, 10)}</span>
            <p>phone number</p>
            <span>{this.props.phoneNumber}</span>
          </div>
        </div>
      </>
    );
  }
}

export default connect(
  (store) => ({
    patients: store.patients,
  }),
  { getPatients }
)(PatientsCards);
