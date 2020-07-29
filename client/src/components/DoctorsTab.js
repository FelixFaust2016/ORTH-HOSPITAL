import React, { Component } from "react";

import All from "./doctorsTabcop/All";
import Dematology from "./doctorsTabcop/Dermatology";
import Concology from "./doctorsTabcop/Concology";
import Orthopedics from "./doctorsTabcop/Orthopedics";
import Nurologist from "./doctorsTabcop/Nurologist";
import Gynagology from "./doctorsTabcop/Gynagology";
import Cardiology from "./doctorsTabcop/Cardology";

class DoctorsTab extends Component {
  state = {
    activeTab: 0,
    tabs: [
      { label: "All", component: <All /> },
      { label: "Dematology", component: <Dematology /> },
      { label: "Concology", component: <Concology /> },
      { label: "Orthopedics", component: <Orthopedics /> },
      { label: "Nurologist", component: <Nurologist /> },
      { label: "Gynagology", component: <Gynagology /> },
      { label: "Cardiology", component: <Cardiology /> },
    ],
  };

  handleClick = (i) => {
    this.setState({ activeTab: i });
    console.log("clicked");
  };

  render() {
    const { activeTab, tabs } = this.state;
    return (
      <>
        <div className="tab-cont">
          {tabs.map((tab, i) => {
            let className = "tab-link ";
            className += activeTab === i ? "tab-active" : " ";
            return (
              <div
                onClick={() => this.handleClick(i)}
                key={`${tab.label}${i}`}
                className={className}
              >
                {tab.label}
              </div>
            );
          })}
        </div>
        <div>{tabs[activeTab] && tabs[activeTab].component}</div>
      </>
    );
  }
}

export default DoctorsTab;
