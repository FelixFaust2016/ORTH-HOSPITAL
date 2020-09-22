import React, { Component } from "react";
import { connect } from "react-redux";

import Category from "./Category";
import Appointment from "./AppointmentComp";
import { getCategory } from "../store/action";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: "",
      visible: false,
    };
  }

  componentDidMount() {
    const { getCategory } = this.props;
    getCategory();
  }

  handleCat = (id) => {
    this.setState({ cat: id });

    this.setState({ visible: true });
  };

  render() {
    return (
      <div
        className="modal-cont"
        style={{
          width: "500px",
          padding: "20px",
          background: "white",
          zIndex: "3",
          borderRadius: "10px",
        }}
        className="modal"
      >
        <h2 style={{ textAlign: "center" }}>
          {this.state.visible === false
            ? "CHOOSE CATEGORY"
            : "BOOK APPOINTMENT"}
        </h2>
        <div className="inner-modal-cont">
          {this.state.visible === false ? (
            <Category
              category={this.props.category}
              handleCat={this.handleCat}
              back= {this.state.visible}
            />
          ) : (
            <Appointment cat={this.state.cat} close={this.props.close} />
          )}
        </div>
        {console.log(this.props.category.name)}
      </div>
    );
  }
}

export default connect(
  (store) => ({
    auth: store.auth,
    category: store.categories,
  }),
  {
    getCategory,
  }
)(Modal);
