import React from "react";

import Img from "../../../img/text.jpg";

const PatientCard = (props) => {
  return (
    <div
      style={{ marginTop: "20px", position: "relative",marginLeft:'35px' }}
      className="pt-lb-card-cont"
    >
      {" "}
      <span
        onClick={props.edit}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px 15px",
          background: "white",
          position: "absolute",
          zIndex: "3",
          right: "0",
          cursor: "pointer",
        }}
      ></span>
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "var(--primary)",
          position: "absolute",
          zIndex: "2",
          borderRadius: "8px",
        }}
      ></div>
      <img src={Img} />
      <div style={{ zIndex: "3" }} className="sl-up">
        <h5>
          {props.firstname} {props.lastname}
        </h5>
        <br/>
        <div>
          <h6>Height</h6>
          <p>{props.height}</p>
        </div>
        <div>
          <h6>Weight</h6>
          <p>{props.weight}</p>
        </div>
        <div>
          <h6>Genotype</h6>
          <p>{props.genotype}</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <button onClick={props.open} className="btn">
            View Tests
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
