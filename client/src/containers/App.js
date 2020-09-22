import React from "react";
import { Provider } from "react-redux";
import decode from "jwt-decode";
import { BrowserRouter as Router } from "react-router-dom";

import { store } from "../store";
import { setCurrentUser, addError, setToken } from "../store/action";
import Views from "./Views";
import DoctorsViews from "../../src/components/Doctors/containers/Views";
import ErrorMessage from "../components/Error";
import AuthenticatedApp from "./AuthenticatesApp";
import UnAuthenticatedApp from "./UnauthenticatedApp";
import "../App.css";

if (localStorage.jwtToken) {
  setToken(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
  } catch (err) {
    store.dispatch(setCurrentUser({}));
    store.dispatch(addError(err));
  }
}

const App = () =>  {
  const isAuthenticated = !!localStorage.jwtToken;
  return  <Provider store={store}>
  <Router>
    <React.Fragment>
      <ErrorMessage />
     {isAuthenticated ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </React.Fragment>
  </Router>
</Provider>
}

export default App;
