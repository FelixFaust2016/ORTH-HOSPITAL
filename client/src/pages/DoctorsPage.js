import React, { Component } from "react";

import Doctor from "../components/Doctors";
import ErrorMessage from "../components/Error";

const DoctorsPage = ({ match, getDoctors, doctors }) => {
  const host = window.location.href;
  getDoctors(match.params.id);

  return (
    <div>
      <Doctor />
    </div>
  );
};

export default DoctorsPage;
