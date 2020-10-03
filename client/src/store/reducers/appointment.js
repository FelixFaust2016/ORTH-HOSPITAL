import { SET_APPOINTMENT, SET_CURRENT_APPOINTMENT } from "../actionTypes";

export const appointments = (state = [], action) => {
  switch (action.type) {
    case SET_APPOINTMENT:
      console.log("set again", action.appointment)
      return action.appointments;
    default:
      return state;
  }
};

export const currentAppointment = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_APPOINTMENT:
      console.log("set", action.appointment)
      return action.appointment;
    default:
      return state;
  }
};
