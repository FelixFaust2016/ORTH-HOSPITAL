import React, { Component } from "react";
import { connect } from "react-redux";
import { createProfile, getUserProfile, updateProfile } from "../store/action";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import DatePicker from "react-datepicker";

import prof from "../img/text.jpg";
import Error from "../components/Error";
// import DropDown from "./DropDown";

// const options = ["male", "female"];
// const genotype = ["aa", "as", "ss"];
// const bloodGroup = ["a", "ab", "b", "o-", "o+"];

class Profile extends Component {
  constructor(props) {
    super(props);
    // const { profile} = this.props;
    const profile = this.props.profile || {};
    this.state = {
      age: profile.age || "",
      DOB: "",
      gender: profile.gender || "",
      country: profile.country || "",
      region: profile.region || "",
      phoneNumber: profile.phoneNumber || "",
      address: profile.address || "",
      nextOffKinPhoneNumber: profile.nextOffKinPhoneNumber || "",
      nextOffKinAddress: profile.nextOffKinAddress || "",
      genotype: profile.genotype || "",
      bloodGroup: profile.bloodGroup || "",
      prevDoctor: profile.prevDoctor || "",
      weight: profile.weight || "",
      height: profile.height || "",
      doctorId: profile.doctorId || "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

  componentDidMount() {
    const { getUserProfile } = this.props;
    getUserProfile();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }

  handleSelectCountry(country) {
    this.setState({ country: country });
  }
  handleSelectRegion(region) {
    this.setState({ region: region });
  }

  handleDate = (date) => {
    this.setState({
      DOB: date,
    });
  };

  handleSubmit = (e) => {
    const { profile } = this.props;

    e.preventDefault();

    if (profile === null) {
      this.props.createProfile(this.state);
    } else {
      this.props.updateProfile(this.state);
    }
  };

  render() {
    const {
      country,
      region,
      age,
      DOB,
      gender,
      phoneNumber,
      nextOffKinAddress,
      nextOffKinPhoneNumber,
      doctorId,
      prevDoctor,
      weight,
      height,
      genotype,
      bloodGroup,
      address,
    } = this.state;

    const { profile } = this.props;
    return (
      <div className="prof-page-conts">
        <div className="prof-left">
          <div className="profileImageConts">
            <span className="profileEdit-pens">
              <i className="fas fa-pen"></i>
            </span>
            <div className="profilePage-imgs">
              <img src={prof} />
            </div>
          </div>{" "}
          <main className="prof-right-comp" style={{ textAlign: "center" }}>
            <h4 style={{ marginTop: "5px" }}>
              {this.props.auth.user.firstname} {this.props.auth.user.lastname}
            </h4>
            <p style={{ fontSize: "12px", color: "grey", margin: "0px" }}>
              {this.props.auth.user.email}
            </p>
            <main style={{ textTransform: "uppercase" }}>
              <h6>WEIGHT</h6>
              <p>{profile && profile.weight}kg</p>
              <h6>HEIGHT</h6>
              <p>{profile && profile.height}</p>
              <h6>GENOTYPE</h6>
              <p>{profile && profile.genotype}</p>
              <h6>BLOOD GROUP</h6>
              <p>{profile && profile.bloodGroup}</p>
            </main>
          </main>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className="prof-right">
            <div className="prof-input">
              <label>Age</label>
              <br />
              <input
                type="text"
                value={age}
                name="age"
                onChange={this.handleChange}
                autoComplete="off"
                autoFocus
              />
            </div>
            <div className="prof-input">
              <label>Date of Birth</label>
              <br />
              <DatePicker
                selected={DOB}
                onChange={this.handleDate}
                className="regionSelect"
              />
            </div>
            <div className="prof-input">
              <label>Gender</label>
              <br />
              <input
                type="text"
                value={gender}
                name="gender"
                onChange={this.handleChange}
                autoComplete="off"
              />
            </div>
            <div className="prof-input">
              <label>Address</label>
              <br />
              <input
                type="text"
                value={address}
                name="address"
                onChange={this.handleChange}
                autoComplete="off"
              />
            </div>
            <div className="prof-input">
              <label>Next of kin Address</label>
              <br />
              <input
                type="text"
                value={nextOffKinAddress}
                name="nextOffKinAddress"
                onChange={this.handleChange}
                autoComplete="off"
              />
            </div>
            <div className="prof-input">
              <label>Phone number</label>
              <br />
              <input
                type="text"
                value={phoneNumber}
                name="phoneNumber"
                onChange={this.handleChange}
                autoComplete="off"
              />
            </div>
            <div className="prof-input">
              <label>next of kin phone Number</label>
              <br />
              <input
                type="text"
                value={nextOffKinPhoneNumber}
                name="nextOffKinPhoneNumber"
                onChange={this.handleChange}
                autoComplete="off"
              />
            </div>
            <div className="prof-input">
              <label>Country</label>
              <br />
              <CountryDropdown
                value={country}
                onChange={(val) => this.selectCountry(val)}
                className="regionSelect"
              />
            </div>
            <div className="prof-input">
              <label>state</label>
              <br />
              <RegionDropdown
                country={country}
                value={region}
                onChange={(val) => this.selectRegion(val)}
                className="regionSelect"
              />
            </div>
            <div className="prof-input">
              <label>weight</label>
              <br />
              <input
                type="text"
                value={weight}
                name="weight"
                onChange={this.handleChange}
                autoComplete="off"
              />
            </div>
            <div className="prof-input">
              <label>height</label>
              <br />
              <input
                type="text"
                value={height}
                name="height"
                onChange={this.handleChange}
                autoComplete="off"
              />
            </div>
            <div className="prof-input">
              <label>geneotype</label>
              <br />
              <input
                type="text"
                value={genotype}
                name="genotype"
                onChange={this.handleChange}
                autoComplete="off"
              />
            </div>
            <div className="prof-input">
              <label>blood Group</label>
              <br />
              <input
                type="text"
                value={bloodGroup}
                name="bloodGroup"
                onChange={this.handleChange}
                autoComplete="off"
              />
            </div>
            <div className="prof-input">
              <label>previous doctor</label>
              <br />
              <input
                type="text"
                value={prevDoctor}
                name="prevDoctor"
                onChange={this.handleChange}
                autoComplete="off"
              />
            </div>
            <button
              // onClick={() => this.props.shouldHide((view) => !view)}
              style={{ marginTop: "20px" }}
              className="btn"
            >
              {this.props.profile ? "Edit Profile" : "Create Profile"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  (store) => ({ profile: store.profiles, auth: store.auth }),
  {
    createProfile,
    getUserProfile,
    updateProfile,
  }
)(Profile);
