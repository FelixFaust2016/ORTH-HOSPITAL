import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../store/action";
import Logo from "./Logo";

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: [
        {
          link: "Dashboard",
          icon: "fas fa-th-large",
          path: "/dashboard",
        },
        { link: "Doctors", icon: "fas fa-user-md", path: "/doctors" },
        {
          link: "Appointment",
          icon: "far fa-calendar-check",
          path: "/appointments",
        },
        { link: "Profile", icon: "far fa-id-badge", path: "/profile" },
        {
          link: "Payment",
          icon: "fas fa-wallet",
          path: "/payment",
        },
      ],
    };
  }
  render() {
    const { nav } = this.state;

    return (
      <section className="side-nav-cont-cont">
        <br />
        <Logo />
        <br />
        <br />
        <nav className="side-nav-cont">
          <div>
            {nav.map((nav, i) => (
              <NavLink
                key={i}
                style={{ textDecoration: "none", color: "white" }}
                to={nav.path}
                activeClassName="nav-active"
                className="link-cont"
              >
                <div className="icon">
                  <i className={nav.icon}></i>
                </div>
                <div className="link">{nav.link}</div>
              </NavLink>
            ))}
          </div>
        </nav>{" "}
        <div onClick={this.props.logout} className="link-cont logout">
          <div className="icon">
            <i style={{ color: "white" }} className="fas fa-sign-out-alt"></i>
          </div>
          <div className="link">Logout</div>
        </div>
      </section>
    );
  }
}

export default connect((store) => ({ auth: store.auth }), { logout })(SideNav);
