import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import RegisterAuth from "../pages/RegisterAuth";
import LoginAuth from "../pages/LoginAuth";
import Home from "../pages/Home";
import FourOFour from "../components/FourOFour";

const UnauthenticatedApp = ({ auth }) => {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/register"
          render={() => (
            <RegisterAuth
              authType={"register"}
              isAuthenticated={auth.isAuthenticated}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={() => (
            <LoginAuth
              authType={"login"}
              isAuthenticated={auth.isAuthenticated}
              user={auth.user}
            />
          )}
        />
        <Route exact path="/*" component={FourOFour} />
      </Switch>
    </div>
  );
};

export default connect(
  (store) => ({ auth: store.auth }),
  {}
)(UnauthenticatedApp);
