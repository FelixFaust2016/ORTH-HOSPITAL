import React, { Component } from "react";
import { connect } from "react-redux";

import { getUserProfile } from "../store/action";

class ProfDash extends Component {
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
    return (
      <>
        <>
          <div>
            <div className="prof-cont">
              <div className="prof-hd">
                <span className="prof-img"></span>
                <span className="prof-name">
                  <h4 style={{ textTransform: "capitalize" }}>
                    {this.props.auth.user.firstname}{" "}
                    {this.props.auth.user.lastname}
                  </h4>
                  <main style={{ textTransform: "capitalize" }}>
                    {profile && profile.age} years, {profile && profile.region}
                  </main>
                </span>
              </div>

              <div className="prof-bd">
                <span>
                  <h6>Genotype</h6>
                  <h4 style={{ textTransform: "uppercase" }}>
                    {profile && profile.genotype}
                  </h4>
                </span>
                <span>
                  <h6>Height</h6>
                  <h4>{profile && profile.height}</h4>
                </span>
                <span>
                  <h6>Weight</h6>
                  <h4>{profile && profile.weight}kg</h4>
                </span>
                <span>
                  <h6>Blood Group</h6>
                  <h4 style={{ textTransform: "uppercase" }}>
                    {profile && profile.bloodGroup}
                  </h4>
                </span>
              </div>
            </div>
          </div>
        </>
      </>
    );
  }
}

export default connect(
  (store) => ({
    profile: store.profiles,
    auth: store.auth,
  }),
  {
    getUserProfile,
  }
)(ProfDash);
