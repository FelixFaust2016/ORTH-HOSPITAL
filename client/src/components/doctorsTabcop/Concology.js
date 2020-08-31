import React, { Component } from "react";
import { connect } from "react-redux";
import Star from "react-star-ratings";

import { getDoctors } from "../../store/action";
import { withRouter } from "react-router-dom";

class Concology extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getDoctors } = this.props;
    getDoctors();
  }

  selectDoctor(id) {
    const { history } = this.props;
    console.log(history);
    history.push({ pathname: `/doctors/${id}` });
  }

  render() {
    const doctors = this.props.doctors
      .filter((doc) => doc.category.name === "concologist")
      .map((doctors, i) => (
        <div
          onClick={() => this.selectDoctor(doctors._id)}
          className="doctor-card"
          key={doctors._id}
        >
          {" "}
          <div className="doctor-inner-cont">
          <div className="doc-card-img">
            <img
              style={{ width: "100px" }}
              src={`http://localhost:5000/${doctors.productImage}`}
            />
            </div>
            <aside className="doc-name">
              {doctors.firstname} {doctors.lastname}
            </aside>
            <aside className="doc-email">{doctors.email}</aside>
            <Star
              rating={doctors.rating}
              starDimension="14px"
              starSpacing="2px"
              numberOfStars={5}
              starRatedColor={"#FDCC0D"}
            />
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
)(withRouter(Concology));
