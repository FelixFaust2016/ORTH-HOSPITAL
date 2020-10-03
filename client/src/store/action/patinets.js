import api from "../../services/api";
import { SET_CURRENT_PATIENT, SET_PATIENT } from "../actionTypes";
import { addError, removeError } from "./error";

export const setPatient = (patients) => ({
  type: SET_PATIENT,
  patients,
});

export const setCurrentPatient = (patient) => ({
  type: SET_CURRENT_PATIENT,
  patient,
});

export const getPatients = () => {
  return async (dispatch) => {
    try {
      const patients = await api.call("get", "patient");
      dispatch(setPatient(patients));
      dispatch(removeError());
    } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
  };
};

export const getCurrentPatient = (path) => {
  return async (dispatch) => {
    try {
      const patient = await api.call("get", `patient/${path}`);
      dispatch(setCurrentPatient(patient));
      dispatch(removeError());
    } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
  };
};
