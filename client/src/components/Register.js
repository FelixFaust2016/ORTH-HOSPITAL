import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { authUser, logout } from "../store/action";
import ErrorMessage from "./Error";
import one from "../img/signup/3.png";
import two from "../img/signup/1.png";
import three from "../img/signup/2.png";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      isLoading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    const { firstname, email, lastname, password, userImage } = this.state;
    const { authType } = this.props;
    e.preventDefault();

    setTimeout(() => {
      this.props.authUser(authType || "register", {
        firstname,
        lastname,
        email,
        password,
        userImage,
      });
    }, 2000);
  }

  handleIsLoading = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  };

  render() {
    const { firstname, email, lastname, password, isLoading } = this.state;
    return (
      <div className="auth-cont">
        <form onSubmit={this.handleSubmit}>
          <main>
            <h2>register</h2>
            <p className="sub-auth-hd">
              Create a patient account and it becomes easier
            </p>
            <ErrorMessage />
            <div className="input-cont">
              <aside>
                <img src={one} />
              </aside>
              <input
                type="text"
                value={firstname}
                name="firstname"
                onChange={this.handleChange}
                placeholder="Firstname"
                autoComplete="off"
                autoFocus
                required
              />
            </div>
            <div className="input-cont">
              <aside>
                <img src={one} />
              </aside>
              <input
                type="text"
                value={lastname}
                name="lastname"
                onChange={this.handleChange}
                placeholder="Lastname"
                autoComplete="off"
                required
              />
            </div>
            <div className="input-cont">
              <aside>
                <img src={two} />
              </aside>
              <input
                type="email"
                value={email}
                name="email"
                onChange={this.handleChange}
                placeholder="Email"
                autoComplete="off"
                required
              />
            </div>
            <div className="input-cont">
              <aside>
                <img src={three} />
              </aside>
              <input
                type="password"
                value={password}
                name="password"
                onChange={this.handleChange}
                placeholder="Password"
                autoComplete="off"
                required
              />
            </div>
            <div className="btn-cont">
              {" "}
              <button onClick={this.handleIsLoading} className="btn" type="submit">
                {isLoading === false ? (
                  "Sign up"
                ) : (
                  <i className="fas fa-spinner"></i>
                )}
              </button>
            </div>

            <p className="auth-foot ">
              Already have an account?<Link to="/login">Login</Link>
            </p>
          </main>
        </form>
      </div>
    );
  }
}

export default connect(() => ({}), { authUser, logout })(Auth);
