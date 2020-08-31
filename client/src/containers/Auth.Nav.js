import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../store/action";
import Logo from "../components/Logo";

const Nav = ({ auth, logout }) => (
  <nav className="land-nav-cont">
    <ul>
      <div style={{ marginTop: "20px", width: "10px" }}>
        <Logo />
      </div>
      <div style={{ flex: "1" }}></div>
      {auth.isAuthenticated === false && (
        <li>
          <Link to="/register">Register</Link>
        </li>
      )}
      {auth.isAuthenticated === false && (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
      {auth.isAuthenticated && (
        <li>
          <a style={{ cursor: "pointer" }} onClick={logout}>
            Logout
          </a>
        </li>
      )}
      {auth.isAuthenticated && (
        <li
          style={{
            fontSize: "20px",
            color: "white",
            textTransform: "uppercase",
          }}
        >
          Welcome, {auth.user.firstname}!
        </li>
      )}
    </ul>
    <div className="land-nav-tx">
      <h1>Orthopeadic Re-imagined</h1>
      <p className="ld-sub-tx">
        With the help of mordern day technology booking appointment from
        anywhere is posible all with the click of a button. Book appointments
        from the covinence of your home. Book appointments from the covinence of
        your home.
      </p>
      <button className="land-btn">
        <p>Book Appointment</p> <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  </nav>
);

export default connect((store) => ({ auth: store.auth }), { logout })(Nav);
