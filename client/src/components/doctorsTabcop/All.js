import React, { Component } from "react";
import { connect } from "react-redux";

import { getDoctors, getCurrentDoctor } from "../../store/action";

class AllDoctors extends Component {
  constructor(props) {
    super(props);

    this.selectDoctor = this.selectDoctor.bind(this);
  }

  componentDidMount() {
    const { getDoctors } = this.props;
    getDoctors();
  }

  selectDoctor(id) {
    const { history } = this.props;
    console.log(history);
    history.push(`/doctors/${id}`);
  }

  render() {
    const { auth, getDoctors } = this.props;

    const doctors = this.props.doctors.map((doctors) => (
      <div
        onClick={() => this.selectDoctor(doctors._id)}
        key={doctors._id}
        className="doctor-card"
      >
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

    return (
      <div>
        {auth.isAuthenticated && <div className="all-doc-cont">{doctors}</div>}
      </div>
    );
  }
}

export default connect(
  (store) => ({
    auth: store.auth,
    doctors: store.doctors,
  }),
  {
    getDoctors,
    getCurrentDoctor,
  }
)(AllDoctors);
