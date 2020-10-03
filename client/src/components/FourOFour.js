import React from "react";
import { Link } from "react-router-dom";

import img from "../img/404.svg";

const FourOFour = () => {
  return (
    <div className="nt-cont">
      <div>
        <div className="nt-img">
          <img style={{ width: "100%" }} src={img} />
        </div>
        <h1>Oops!</h1>
        <p>We can't seem to find this page you are lookoing for.</p>
        <br />
        <p>Here some helpful links below:</p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
            width: "350px",
            margin: "0px auto",
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            <button style={{ margin: "10px auto" }} className="btn">
              Back to home
            </button>
          </Link>
          <Link to="/dashboard">
            <button style={{ margin: "10px auto" }} className="btn">
              Back to dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FourOFour;
