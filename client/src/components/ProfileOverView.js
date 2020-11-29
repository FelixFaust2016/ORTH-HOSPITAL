import React, { Component } from "react";
import { connect } from "react-redux";

import { getUserProfile } from "../store/action";
import prof from "../img/text.jpg";

class ProfOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getUserProfile } = this.props;
    getUserProfile();
  }

  render() {
    const { profile } = this.props;
    console.log("##################");
    console.log(profile);
    return (
      <div
        style={{
          background: "white",
          padding: "12px 0px",
          marginTop: "20px",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px",
        }}
      >
        <div>
          {!profile ? (
            <>
              <div
                style={{ width: "250px", justifyContent: "space-between" }}
                className="profileImageCont"
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50px",
                    background: "grey",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i style={{ fontSize: "20px" }} className="fas fa-images"></i>
                </div>
                <div>
                  <h4>
                    {this.props.auth.user.firstname}{" "}
                    {this.props.auth.user.lastname}
                  </h4>
                  <p style={{ fontSize: "14px" }}>
                    {this.props.auth.user.email}
                  </p>
                </div>
              </div>
              <button
                onClick={() => this.props.shouldHide((view) => !view)}
                style={{
                  height: "10px",
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 20px",
                  color: "white",
                  background: "#ED8388",
                  border: "none",
                  borderRadius: "2px",
                  cursor: "pointer",
                  fontSize: "10px",
                  margin: "5px auto",
                  outline: "none",
                }}
              >
                <p>Create Profile </p>
                <i
                  style={{ marginLeft: "7px", outline: "none" }}
                  className="fas
                     fa-user-plus"
                ></i>
              </button>
            </>
          ) : (
            <>
              <div
                style={{
                  width: "250px",
                  justifyContent: "space-between",
                  display: "flex",
                }}
                className="profileImageCont"
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    overflow: "hidden",
                    borderRadius: "80px",
                  }}
                >
                  <img style={{ width: "100%" }} src={prof} />
                </div>
                <div>
                  <h4 style={{ textTransform: "capitalize" }}>
                    {this.props.auth.user.firstname}{" "}
                    {this.props.auth.user.lastname}
                  </h4>
                  <p style={{ fontSize: "12px", marginLeft: "2px" }}>
                    {this.props.auth.user.email}
                  </p>
                </div>
              </div>
              <button
                onClick={() => this.props.shouldHide((view) => !view)}
                style={{
                  height: "10px",
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 20px",
                  color: "white",
                  background: "#ED8388",
                  border: "none",
                  borderRadius: "2px",
                  cursor: "pointer",
                  fontSize: "10px",
                  margin: "5px auto",
                  outline: "none",
                }}
              >
                <p>Edit Profile </p>
                <i
                  style={{ marginLeft: "7px", outline: "none" }}
                  className="fas
                     fa-user-plus"
                ></i>
              </button>
              <div className="prof-over-cont">
                <div>
                  <div className="prof-over-cont-text">
                    <h5>Name:</h5>
                    <p>
                      {this.props.auth.user.firstname}{" "}
                      {this.props.auth.user.lastname}
                    </p>
                  </div>

                  <div className="prof-over-cont-text">
                    <h5>Email:</h5>
                    <p>{this.props.auth.user.email}</p>
                  </div>
                  <div className="prof-over-cont-text">
                    <h5>Contact:</h5>
                    <p>{profile.phoneNumber}</p>
                  </div>
                  <br />
                  <hr></hr>
                  <div className="prof-over-cont-text">
                    <h5>Age:</h5>
                    <p>{profile.age}</p>
                  </div>
                  <div className="prof-over-cont-text">
                    <h5>Next of Kin Phone.no:</h5>
                    <p>{profile.nextOffKinPhoneNumber}</p>
                  </div>
                  <div className="prof-over-cont-text">
                    <h5>Next of Kin Address:</h5>
                    <p>{profile.nextOffKinAddress}</p>
                  </div>
                  <div className="prof-over-cont-text">
                    <h5>Address:</h5>
                    <p>{profile.address}</p>
                  </div>
                  <div className="prof-over-cont-text">
                    <h5>State:</h5>
                    <p>{profile.region}</p>
                  </div>
                  <br />
                  <hr></hr>
                  {/* <div className="prof-over-cont-text">
                    <h5>Genotype:</h5>
                    <p>{profile.genotype}</p>
                  </div>
                  <div className="prof-over-cont-text">
                    <h5>Blood Group:</h5>
                    <p>{profile.bloodGroup}</p>
                  </div>
                  <div className="prof-over-cont-text">
                    <h5>Weight:</h5>
                    <p>{profile.weight}kg</p>
                  </div>
                  <div className="prof-over-cont-text">
                    <h5>height:</h5>
                    <p>{profile.height}</p>
                  </div> */}
                </div>
              </div>{" "}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  (store) => ({
    auth: store.auth,
    profile: store.profiles,
  }),
  { getUserProfile }
)(ProfOverview);
