import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getCategory } from "../store/action";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeCOmp: false,
    };
  }

  componentDidMount() {
    const { getCategory } = this.props;
    getCategory();
  }


  render() {
    // console.log("CATEGORY: ", this.props.category);
    const categor = this.props.category.map((category) => (
      // <Link
      //   style={{ textDecoration: "none", color: "black" }}
      //   to="/appointment/create"
      //   state={"category.name"}
      //   to={{
      //     pathname: "/appointment/create",
      //     state: { name: category.name },
      //   }}
      // >
      <div
      key={category._id}
        onClick={() => this.props.handleCat(category._id)}
        className="cat-cont"
        style={{
          marginLeft: "20px",
          marginTop: "10px",
          width: "100px",
          padding: " 20px 10px",
          boxShadow: "5px 5px 5px 5px rgba(0, 0, 0, 0.004)",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "0.3s ease-in",
        }}
      >
        <div
          className="pic-cont"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <i
            style={{ textAlign: "center", fontSize: "20px" }}
            className={category.pic}
          ></i>
        </div>
        <div>
          <p
            style={{
              textAlign: "center",
              textTransform: "uppercase",
              fontSize: "12px",
              fontWeight: "600",
              marginTop: "10px",
            }}
          >
            {category.name}
          </p>
        </div>
      </div>
      // </Link>
    ));
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap" }}>{categor}</div>
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
)(Category);
