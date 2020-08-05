import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { getCurrentDoctor } from "../store/action/doctor";
import Button from "./Button";

const Doctor = (props) => {
  const { doctors } = props;
  var doctorId = useParams().id;
  const [doctor, setDoctor] = useState({});

  props.getCurrentDoctor(doctorId).then((result) => setDoctor(result));

  return (
    <section className="doc-det-sec">
      <Link to="/doctors">
        <i
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            color: "white",
            fontSize: "18px",
          }}
          className="fas fa-arrow-left"
        ></i>
      </Link>
      <div className="doc-sid-one">
        <img
          width="100%"
          style={{ overflow: "hidden" }}
          src={`http://localhost:5000/${doctor.productImage}`}
        />
      </div>
      <div className="doc-sid-two">
        <div className="doc-side-inner-cont">
          <span>
            Dr. {doctor.firstname} {doctor.lastname}
          </span>
          <p className="desc">{doctor.description}</p>
          <p className="qual">
            <span>Qualification:</span> {doctor.qualification}
          </p>
          <p className="qual">
            <span>Time Available:</span> {doctor.timeAvailable}
          </p>
          <p className="qual">
            <span>Email:</span> {doctor.email}
          </p>
          <p className="qual">
            <span>Phone Number.:</span> {doctor.phoneNumber}
          </p>
          <span>
            <Button value={"Book Appointment"} />
          </span>
        </div>
      </div>
    </section>
  );
};

export default connect(
  (store) => ({
    doctors: store.currentDoctor,
    doctor: store.doctor,
  }),
  {
    getCurrentDoctor,
  }
)(Doctor);
