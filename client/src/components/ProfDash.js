import React, { Component } from "react";

class ProfDash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="prof-cont">
        <div className="prof-hd">
          <span className="prof-img"></span>
          <span className="prof-name">
            <h4>Timmy Turner</h4>
            <main>35 years, Huston</main>
          </span>
        </div>
        <div className="prof-bd">
          <span>
            <h6>Blood</h6>
            <h4>A</h4>
          </span>
          <span>
            <h6>Height</h6>
            <h4>-</h4>
          </span>
          <span>
            <h6>Weight</h6>
            <h4>-</h4>
          </span>
          <span>
            <h6>Pressure</h6>
            <h4>-</h4>
          </span>
        </div>
      </div>
    );
  }
}

export default ProfDash;
