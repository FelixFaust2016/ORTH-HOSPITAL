import React from "react";

import prof from "../img/text.jpg";

const ProfOverview = () => {
  return (
    <div
      style={{
        background: "white",
        padding: "20px 0px",
        marginTop: "20px",
        height: "79vh",
      }}
    >
      <div className="profileImageCont">
        <span className="profileEdit-pen">
          <i className="fas fa-pen"></i>
        </span>
        <div className="profilePage-img">
          <img src={prof} />
        </div>
        <div>
          <h4>Victor Iheukwumere</h4>
          <p style={{ fontSize: "14px" }}>victor@gmail.com</p>
        </div>
      </div>
      <div className="prof-over-cont">
        <div className="prof-over-cont-text">
          <h5>Name:</h5>
          <p>Victor Iheukwumere</p>
        </div>
        <div className="prof-over-cont-text">
          <h5>Email:</h5>
          <p>victoriheukwumere@gmail.com</p>
        </div>
        <div className="prof-over-cont-text">
          <h5>Contact:</h5>
          <p>09034583903</p>
        </div>
        <br />
        <hr></hr>
        <div className="prof-over-cont-text">
          <h5>Age:</h5>
          <p>19</p>
        </div>
        <div className="prof-over-cont-text">
          <h5>Next of Kin Phone.no:</h5>
          <p>09034583903</p>
        </div>
        <div className="prof-over-cont-text">
          <h5>Next of Kin Address:</h5>
          <p>10A akutu cresent Independence layout</p>
        </div>
        <div className="prof-over-cont-text">
          <h5>Address:</h5>
          <p>10A akutu cresent Independence layout</p>
        </div>
      </div>
    </div>
  );
};

export default ProfOverview;
