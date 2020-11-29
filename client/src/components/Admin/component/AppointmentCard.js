import React from "react";
import img from "../../../img/text.jpg";

const AppCard = (props) => {
  return (
    <div className="app-admin-card-cont">
      <div className="admin-top">
        <aside>
          <div className="app-admin-card-img">
            <img src={img} />
          </div>
          <p style={{ textTransform: "capitalize" }}>
            {props.firstname} {props.lastname}
          </p>
        </aside>
      </div>
      <div className="app-admin-text">
        <p>{props.date}</p>
        <p>{props.time}</p>
        <p>{props.status}</p>
        <span onClick={props.click}>
          <p>view details</p>
        </span>
      </div>
    </div>
  );
};

export default AppCard;
