import api from "../../services/api";
import { SET_DOCTORS, SET_CURRENT_DOCTOR } from "../actionTypes";
import { addError, removeError } from "./error";

export const setDoctors = (doctors) => ({
  type: SET_DOCTORS,
  doctors,
});

export const setCurrentDoctor = doctors => ({
  type: SET_CURRENT_DOCTOR,
  doctors
});


export const getDoctors = () => {
  return async (dispatch) => {
    try {
      const doctors = await api.call("get", "doctors");
      dispatch(setDoctors(doctors));
      dispatch(removeError());
    } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
  };
};

export const getCurrentDoctor = path => {
  return async dispatch => {
    try {
      const doctor = await api.call("get", `doctors/${path}`);
      return doctor;
      dispatch(setCurrentDoctor(doctor));
      dispatch(removeError());
    } catch (err) {
      console.log(err)
      const error = err.response;
      dispatch(addError(error));
    }
  };
};
