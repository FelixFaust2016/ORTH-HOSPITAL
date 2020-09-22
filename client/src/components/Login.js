import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import { authUser, logout } from "../store/action";
import ErrorMessage from "../components/Error";
import two from "../img/signup/1.png";
import three from "../img/signup/2.png";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  async handleSubmit(e) {
    const { email, password } = this.state;
    const { authType } = this.props;
    e.preventDefault();

    await this.props.authUser(authType || "login", { email, password });
    this.props.history.push("/dashboard")
   

  
  }

  handleIsLoading = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  };

  render() {
    console.log(this.props.history)
    const { email, password, isLoading } = this.state;
    return (
      <div className="auth-cont">
        <form onSubmit={this.handleSubmit}>
          <main>
            <h2>login</h2>
            <p className="sub-auth-hd">We provide the best healthcare</p>
            <div className="input-cont">
              <aside>
                <img src={two} />
              </aside>
              <input
                type="email"
                value={email}
                name="email"
                onChange={this.handleChange}
                placeholder="email"
                autoComplete="off"
                autoFocus
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
                placeholder="password"
                autoComplete="off"
                required
              />
            </div>
            <div className="btn-cont">
              <button
                onClick={this.handleIsLoading}
                className="btn"
                type="submit"
              >
                {isLoading === false ? (
                  "Login"
                ) : (
                  <i className="fas fa-spinner"></i>
                )}
              </button>
            </div>

            <p className="auth-foot ">
              Don't have an account?<Link to="/register">Register</Link>
            </p>
          </main>
        </form>
      </div>
    );
  }
}

export default withRouter(connect(() => ({}), { authUser, logout })(Auth));
