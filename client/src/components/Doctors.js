import React from "react";
import { connect } from "react-redux";

// import { getDoctors } from "../store/action";

const Doctor = ({ doctors }) => {
  return (
    <div>
      <div>{doctors.firstname}</div>
      <div>{doctors.lastname}</div>
      <p>Hello</p>
    </div>
  );
};

export default connect(
  (store) => ({
    doctors: store.currentDoctor,
  }),
  // {
  //   getDoctors,
  // }
)(Doctor);