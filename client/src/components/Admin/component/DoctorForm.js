import React, { Component } from "react";

class DocForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      file: "",
      category: "",
      phoneNumber: "",
      rating: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
  }

  handleFile(e) {
    this.setState({ file: e.target.file[0] });
    console.log(this.state.file);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const {
      firstname,
      lastname,
      email,
      password,
      file,
      category,
      phoneNumber,
      rating,
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="doc-create-form">
        <h2>Create Doctor</h2>
        <div className="doc-div">
          <label>Doctors firstname</label>
          <br />
          <input
            type="text"
            autoComplete="off"
            name="firstname"
            value={firstname}
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="doc-div">
          <label>Doctors lastname</label>
          <br />
          <input
            type="text"
            autoComplete="off"
            name="lastname"
            value={lastname}
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="doc-div">
          <label>Doctors email</label>
          <br />
          <input
            type="text"
            autoComplete="off"
            name="email"
            value={email}
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="doc-div">
          <label>Doctors password</label>
          <br />
          <input
            type="text"
            autoComplete="off"
            name="password"
            value={password}
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="doc-div">
          <label>Doctors Category</label>
          <br />
          <input
            type="text"
            autoComplete="off"
            name="category"
            value={category}
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="doc-div">
          <label>Doctors phone number</label>
          <br />
          <input
            type="text"
            autoComplete="off"
            name="phoneNumber"
            value={phoneNumber}
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="doc-div">
          <label>Doctors rating </label>
          <br />
          <input
            type="text"
            autoComplete="off"
            name="rating"
            value={rating}
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="doc-div">
          <label>Doctors image </label>
          <br />
          <input
            type="file"
            autoComplete="off"
            name="file"
            value={file}
            onChange={this.handleFile}
          ></input>
        </div>
        <button
          // onClick={() => this.props.shouldHide((view) => !view)}
          style={{ marginTop: "20px" }}
          className="btn"
        >
          Create Doctor
        </button>
      </form>
    );
  }
}

export default DocForm;
