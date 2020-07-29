import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../store/action";

const Nav = ({ auth, logout }) => (
  <nav>
    <ul>
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
          <a onClick={logout}>Logout</a>
        </li>
      )}
      {auth.isAuthenticated && <li>Logged in as {auth.user.firstname}</li>}
    </ul>
  </nav>
);

export default connect((store) => ({ auth: store.auth }), { logout })(Nav);
