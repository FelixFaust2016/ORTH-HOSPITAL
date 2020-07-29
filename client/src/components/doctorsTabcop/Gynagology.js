import React, { Component } from "react";
import { connect } from "react-redux";

import { getDoctors } from "../../store/action";


class Gynagology extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { getDoctors } = this.props;
    getDoctors();
  }

  render() {
    const doctors = this.props.doctors
      .filter((doc) => doc.category.name === "gynocologist")
      .map((doctors, i) => (
        <div className="doctor-card" key={doctors._id}>
          {" "}
          <div className="doctor-inner-cont">
            <img
              style={{ width: "100px" }}
              src={`http://localhost:5000/${doctors.productImage}`}
            />
            <aside className="doc-name">
              Dr. {doctors.firstname} {doctors.lastname}
            </aside>
            <aside className="doc-email">{doctors.email}</aside>
            <aside className="doc-category">{doctors.category.name}</aside>
          </div>
        </div>
      ));

    return <div className="all-doc-cont">{doctors}</div>;
  }
}

export default connect(
  (store) => ({
    auth: store.auth,
    doctors: store.doctors,
  }),
  {
    getDoctors,
  }
)(Gynagology);
