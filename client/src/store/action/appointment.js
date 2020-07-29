import api from "../../services/api";
import { SET_APPOINTMENT, SET_CURRENT_APPOINTMENT } from "../actionTypes";
import { addError, removeError } from "./error";

export const setAppointments = (appointments) => ({
  type: SET_APPOINTMENT,
  appointments,
});

export const setCurrentAppointment = (appointment) => ({
  type: SET_CURRENT_APPOINTMENT,
  appointment,
});

export const getAppointments = () => {
  return async (dispatch) => {
    try {
      const appointments = await api.call("get", "appointment");
      dispatch(setAppointments(appointments));
      dispatch(removeError());
    } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
  };
};

export const getUserAppointment = () => {
  return async (dispatch) => {
    try {
      const appointments = await api.call("get", "appointment/user");
      dispatch(setAppointments(appointments));
      dispatch(removeError());
    } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
  };
};

export const getCurrentAppointment = (path) => {
  return async (dispatch) => {
    try {
      const appointment = await api.call("get", `appointment/${path}`);
      dispatch(setCurrentAppointment(appointment));
      dispatch(removeError());
    } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
  };
};
