import React from "react";
import { connect } from "react-redux";

const TopNav = ({ title, auth }) => {
  return (
    <nav className="top-nav">
      <h4>{title}</h4>
      <div style={{ flex: 1 }}></div>
      <main className="rr-tp">
        <i className="fas fa-search"></i>
        <i className="fas fa-envelope-open"></i>
        <i className="fas fa-bell"></i>
        <main className="circ">{auth.user.firstname.split("")[0]}</main>
      </main>
    </nav>
  );
};

export default connect((store) => ({ auth: store.auth }))(TopNav);
