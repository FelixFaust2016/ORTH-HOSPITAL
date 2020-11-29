import { combineReducers } from "redux";

import auth from "./auth";
import error from "./error";
import { doctors, currentDoctor } from "./doctor";
import { quotes } from "./quotes";
import { appointments, currentAppointment } from "./appointment";
import { categories } from "./category";
import { profiles } from "./profile";
import { patients, currentPatient } from "./patinets";
import { tests, currentTest } from "./test";

export default combineReducers({
  auth,
  error,
  doctors,
  quotes,
  appointments,
  currentAppointment,
  currentDoctor,
  categories,
  profiles,
  patients,
  currentPatient,
  tests,
  currentTest,
});
