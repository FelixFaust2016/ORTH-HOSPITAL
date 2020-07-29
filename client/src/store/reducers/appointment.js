import { SET_APPOINTMENT, SET_CURRENT_APPOINTMENT } from "../actionTypes";

export const appointments = (state = [], action) => {
  switch (action.type) {
    case SET_APPOINTMENT:
      return action.appointments;
    default:
      return state;
  }
};

export const currentAppointment = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_APPOINTMENT:
      return action.appointment;
    default:
      return state;
  }
};
