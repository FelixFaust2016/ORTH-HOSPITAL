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
    console.log("helllllllllllooooo");
    try {
      const appointments = await api.call("get", "appointment");
      console.log(appointments, "____________________");
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
    console.log("I reached");
    try {
      const appointments = await api.call("get", "appointment/user");
      console.log(appointments);
      dispatch(setAppointments(appointments));
      dispatch(removeError());
      console.log("I got here");
    } catch (err) {
      console.log(err, "=================");
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

export const createAppointment = (data) => {
  console.log("data", data);
  return async (dispatch) => {
    try {
      const appointment = await api.call("post", "appointment", data);
      dispatch(setCurrentAppointment(appointment));
      dispatch(removeError());
    } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
  };
};

export const getDoctorsApp = (path) => {
  return async (dispatch) => {
    try {
      const appointments = await api.call("get", "appointment/doctor");
      dispatch(setAppointments(appointments));
      dispatch(removeError());
    } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
  };
};

export const deleteAppointment = (path) => {
  return async (dispatch) => {
    try {
      const appointment = await api.call("delete", `appointment/${path}`);
      dispatch(setCurrentAppointment(appointment));
      dispatch(removeError());
    } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
  };
};
