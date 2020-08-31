import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../Logo";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: [
        {
          link: "Overview",
          icon: "fas fa-signal",
          path: "/doctors_dashboard",
        },
        {
          link: "Paitents",
          icon: "fas fa-user-injured",
          path: "/doctors_patients",
        },
        {
          link: "Appointment",
          icon: "far fa-calendar-check",
          path: "/doctors_appointments",
        },
        { link: "Settings", icon: "fas fa-cogs", path: "/doctors_settings" },
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
        <div className="link-cont logout">
          <div className="icon">
            <i style={{ color: "white" }} className="fas fa-sign-out-alt"></i>
          </div>
          <div className="link">Logout</div>
        </div>
      </section>
    );
  }
}

export default Navigation;
