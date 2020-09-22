import React, { Component } from "react";
import { connect } from "react-redux";

import { getUser } from "../../../store/action";

import one from "../../../img/rename.jpg";

class PatientsCards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getUser } = this.props;
    getUser();
  }

  render() {
    return (
      <>
        <div className="doctor-card">
          {" "}
          <div className="doctor-inner-cont">
            <div className="doc-card-img">
              <img style={{ width: "100%" }} src={one} />
            </div>
            <div>
              <aside className="doc-name">
                {/* {auth.user.firstname} {auth.user.lastname} */}
              </aside>
              <aside className="doc-email">
                {/* {auth.user.email} */}
                </aside>
              <aside className="doc-category">
                {/* {app.profile.phoneNumber} */}
              </aside>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect(
  (store) => ({
    auth: store.auth,
  }),
  { getUser }
)(PatientsCards);
