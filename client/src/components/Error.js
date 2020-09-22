import React, { Component } from "react";
import { connect } from "react-redux";

const Error = ({ error }) => (
  <>
    {error && (
      <main
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          background: "#FF0033",
          color: "white",
          padding: error.message && " 10px 10px",
        }}
        className="error-cont"
      >
        <div style={{ color: "white" }} className="error">
          <p>{error.message}</p>{" "}
          {error.message && (
            <i
              style={{ marginLeft: "5px" }}
              class="fas fa-exclamation-circle"
            ></i>
          )}
        </div>
      </main>
    )}
  </>
);

export default connect((store) => ({ error: store.error }))(Error);
