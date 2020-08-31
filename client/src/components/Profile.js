import React, { Component } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import DatePicker from "react-datepicker";

import DropDown from "./DropDown";

import prof from "../img/text.jpg";

const options = ["male", "female"];
const genotype = ["aa", "as", "ss"];
const bloodGroup = ["a", "ab", "b", "o-", "o+"];

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      region: "",
    };
  }
  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }
  render() {
    const { country, region } = this.state;
    return (
      <div
        style={{ background: "white", padding: "20px 0px", marginTop: "20px" }}
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
            <p style={{fontSize:'14px'}}>victor@gmail.com</p>
          </div>
        </div>
        <form className="profile-form">
          <div>
            <label>Age</label>
            <input type="text" />
          </div>
          <div>
            <label>Date of Birth</label>
            <DatePicker className="regionSelect" />
          </div>
          <div>
            <label>Gender</label>
            <DropDown options={options} placeHolder={"gender"} />
          </div>
          <div>
            <label>Country</label>
            <CountryDropdown
              value={country}
              onChange={(val) => this.selectCountry(val)}
              className="regionSelect"
            />
          </div>
          <div>
            <label>State</label>
            <RegionDropdown
              country={country}
              value={region}
              onChange={(val) => this.selectRegion(val)}
              className="regionSelect"
            />
          </div>{" "}
          <div>
            <label>Phone Number</label>
            <input type="text" />
          </div>
          <div>
            <label>Next Of Kin Phone Number</label>
            <input type="text" />
          </div>
          <div>
            <label>Address</label>
            <input type="text" />
          </div>
          <div>
            <label>Next of Kin Address</label>
            <input type="text" />
          </div>
          <div>
            <label>Genotype</label>
            <DropDown options={genotype} placeHolder={"genotype"} />
          </div>
          <div>
            <label>Blood Group</label>
            <DropDown options={bloodGroup} placeHolder={"blood group"} />
          </div>
          <div>
            <label>Height</label>
            <input type="text" />
          </div>
          <div>
            <label>Weight</label>
            <input type="text" />
          </div>
          <div>
            <label>Doctor</label>
            <input type="text" />
          </div>
          <div>
            <label>Previous Doctor</label>
            <input type="text" />
          </div>
        </form>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              height: "20px",
              display: "flex",
              alignItems: "center",
              padding: "20px 20px",
              color: "white",
              background: "#ED8388",
              border: "none",
              borderRadius: "2px",
              marginTop: "30px",
              cursor: "pointer",
            }}
          >
            <p>create </p>
            <i
              style={{ marginLeft: "7px", outline: "none" }}
              className="fas
                     fa-user-plus"
            ></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Profile;
