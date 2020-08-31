import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo/logo.png";

const Logo = () => (
  <Link style={{ textDecoration: "none", color: "white" }} to="/">
    <span className="logo-cont">
      <div className="logo-img-cont">
        <img src={logo} />
      </div>{" "}
      <h4>ORTH</h4>
    </span>
  </Link>
);

export default Logo;
