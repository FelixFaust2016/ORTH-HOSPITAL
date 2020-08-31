import React from "react";
import { connect } from "react-redux";

import Quote from "./Quote";

const Welcome = ({ auth }) => {
  return (
    <div>
      <div className="wel-cont">
        <div className="wel-text">
        <span className="welcome">Welcome</span>
        <div className="name">
          <div>
            <h3>
              {auth.user.firstname} {auth.user.lastname}
            </h3>
          </div>
        </div>
        <br/>
        <div className="quote">
          <Quote />
        </div>
      </div>
      </div>
    </div>
  );
};

export default connect((store) => ({ auth: store.auth }))(Welcome);
