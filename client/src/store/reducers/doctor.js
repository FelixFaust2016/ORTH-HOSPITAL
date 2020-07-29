import { SET_DOCTORS, SET_CURRENT_DOCTOR } from "../actionTypes";

export const doctors = (state = [], action) => {
  switch (action.type) {
    case SET_DOCTORS:
      return action.doctors;
    default:
      return state;
  }
};

export const currentDoctor = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_DOCTOR:
      return action.doctor;
    default:
      return state;
  }
};

