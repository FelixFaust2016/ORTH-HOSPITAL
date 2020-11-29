import React, { Component } from "react";
import { connect } from "react-redux";
import { authUser, logout } from "../../../store/action";
import ErrorMessage from "../../Error";

import DropDown from "../../DropDown";

const role = ["patient", "admin", "lab"];

class AdminForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      role: "",
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  hnadleSubmit

  render() {
    return (
      <form
        style={{ paddingBottom: "84px" }}
        className="doc-create-form users-create-form"
      >
        <h2>Create User</h2>
        <div className="doc-div">
          <label>User firstname</label>
          <br />
          <input type="text" autoComplete="off"></input>
        </div>
        <div className="doc-div">
          <label>User lastname</label>
          <br />
          <input type="text" autoComplete="off"></input>
        </div>
        <div className="doc-div">
          <label>Users email</label>
          <br />
          <input type="text" autoComplete="off"></input>
        </div>
        <div className="doc-div">
          <label>Users role</label>
          <br />
          <DropDown options={role} placeHolder={"role"} />
        </div>
        <div className="doc-div">
          <label>Users password</label>
          <br />
          <input type="text" autoComplete="off"></input>
        </div>
        <div>
          <button
            // onClick={() => this.props.shouldHide((view) => !view)}
            style={{ marginTop: "20px" }}
            className="btn"
          >
            Create User
          </button>
        </div>
      </form>
    );
  }
}

export default connect(() => ({}), { authUser, logout })(AdminForm);
