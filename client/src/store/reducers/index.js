import { combineReducers } from "redux";

import auth from "./auth";
import error from "./error";
import { doctors, currentDoctor } from "./doctor";
import { quotes } from "./quotes";
import {appointments} from "./appointment"

export default combineReducers({
  auth,
  error,
  doctors,
  quotes,
  appointments,
  currentDoctor
});