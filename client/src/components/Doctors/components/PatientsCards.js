import React, { Component } from "react";

import one from "../../../img/rename.jpg";

class PatientsCards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="doctor-card">
        {" "}
        <div className="doctor-inner-cont">
          <div className="doc-card-img">
            <img style={{ width: "100%" }} src={one} />
          </div>
          <div>
            <aside className="doc-name">Karin Pagjfnjgrkptkrptprpe</aside>
            <aside className="doc-email">Karin@gmail.com</aside>
            <aside className="doc-category">09088376712</aside>
          </div>
        </div>
      </div>
    );
  }
}

export default PatientsCards;
