import React from "react";
import { Provider } from "react-redux";
import decode from "jwt-decode";
import { BrowserRouter as Router } from "react-router-dom";

import { store } from "../store";
import { setCurrentUser, addError, setToken } from "../store/action";
import View from "./Views";
import "../App.css"

if (localStorage.jwtToken) {
  setToken(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
  } catch (err) {
    store.dispatch(setCurrentUser({}));
    store.dispatch(addError(err));
  }
}

const App = () => (
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <View />
      </React.Fragment>
    </Router>
  </Provider>
);

export default App;
