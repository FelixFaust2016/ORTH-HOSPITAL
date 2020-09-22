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

      age: "",
      DOB: "",
      gender: "",
      country: "",
      region: "",
      phoneNumber: "",
      address: "",
      nextOffKinPhoneNumber: "",
      nextOffKinAdress: "",
      genotype: "",
      bloodGroup: "",
      prevDoctor: "",
      weight: "",
      height: "",
      doctorId: "",
      prevDoctor: "",
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSelectCountry(country) {
    this.setState({ country: country });
  }
  handleSelectRegion(region) {
    this.setState({ region: region });
  }
  handleGender(gender) {
    this.setState({ gender: gender });
  }
  handleGenotype(genotype) {
    this.setState({ genotype: genotype });
  }

  handleBloodGroup(bloodGroup) {
    this.setState({ bloodGroup: bloodGroup });
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }
  render() {
    console.log(this.state);
    const {
      country,
      region,
      age,
      DOB,
      gender,
      phoneNumber,
      nextOffKinAdress,
      nextOffKinPhoneNumber,
      doctorId,
      prevDoctor,
      weight,
      height,
      // genotype,
      // bloodGroup,
      address,
    } = this.state;

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
            <p style={{ fontSize: "14px" }}>victor@gmail.com</p>
          </div>
        </div>
        <form className="profile-form">
          <div>
            <label>Age</label>
            <input
              type="text"
              value={age}
              name={age}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Date of Birth</label>
            <DatePicker className="regionSelect" />
          </div>
          <div>
            <label>Gender</label>
            <DropDown
              options={options}
              placeHolder={"gender"}
              value={gender}
              onChange={this.handleGender}
            />
          </div>
          <div>
            <label>Country</label>
            <CountryDropdown
              value={country}
              onChange={(val) => this.selectCountry(val)}
              className="regionSelect"
              onChange={this.handleSelectCountry}
            />
          </div>
          <div>
            <label>State</label>
            <RegionDropdown
              country={country}
              value={region}
              onChange={(val) => this.selectRegion(val)}
              className="regionSelect"
              onChange={this.handleSelectRegion}
            />
          </div>{" "}
          <div>
            <label>Phone Number</label>
            <input type="text" value={phoneNumber} name={phoneNumber} />
          </div>
          <div>
            <label>Next Of Kin Phone Number</label>
            <input
              type="text"
              value={nextOffKinPhoneNumber}
              name={nextOffKinPhoneNumber}
            />
          </div>
          <div>
            <label>Address</label>
            <input type="text" value={address} name={address} />
          </div>
          <div>
            <label>Next of Kin Address</label>
            <input
              type="text"
              value={nextOffKinAdress}
              name={nextOffKinAdress}
            />
          </div>
          <div>
            <label>Genotype</label>
            <DropDown
              options={options}
              placeHolder={"genotype"}
              value={genotype}
              onChange={this.handleGenotype}
            />
          </div>
          <div>
            <label>Blood Group</label>
            <DropDown
              options={options}
              placeHolder={"blood group"}
              value={bloodGroup}
              onChange={this.handleBloodGroup} 
            />
          </div>
          <div>
            <label>Height</label>
            <input
              type="text"
              value={height}
              name={height}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Weight</label>
            <input
              type="text"
              value={weight}
              name={weight}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Doctor</label>
            <input
              type="text"
              value={doctorId}
              name={doctorId}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Previous Doctor</label>
            <input
              type="text"
              value={prevDoctor}
              name={prevDoctor}
              onChange={this.handleChange}
            />
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
            onClick={() => this.props.shouldHide((view) => !view)}
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
              outline: "none",
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
