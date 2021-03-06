import React, { Component } from "react";

import ill from "../img/stat-dash/ill-app.png";

import { Link } from "react-router-dom";

const Book = () => {
  return (
    <div className="booking-cont">
      <div>
        <h5 style={{ paddingBottom: "7px" }}>Book your appointment quickly</h5>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/appointments"
        >
          <button style={{ fontSize: "10px" }} className="btn">
            Book Appointment
          </button>
        </Link>
      </div>
      <img src={ill} />
    </div>
  );
};

export default Book;
