import React, { Component } from "react";
import { connect } from "react-redux";

const Error = ({ error }) => (
  <>
    {error && (
      <main className="error-cont">
        <div className="error">
          {error.message && <i class="fas fa-exclamation-triangle"></i>}
          {error.message}{" "}
        </div>
      </main>
    )}
  </>
);

export default connect((store) => ({ error: store.error }))(Error);
