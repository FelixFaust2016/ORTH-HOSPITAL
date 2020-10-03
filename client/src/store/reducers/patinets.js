import { SET_PATIENT, SET_CURRENT_PATIENT } from "../actionTypes";

export const patients = (state = [], action) => {
  switch (action.type) {
    case SET_PATIENT:
      return action.patients;
    default:
      return state;
  }
};

export const currentPatient = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_PATIENT:
      return action.patient;
    default:
      return state;
  }
};
