import { SET_TEST, SET_CURRENT_TEST } from "../actionTypes";

export const tests = (state = [], action) => {
  switch (action.type) {
    case SET_TEST:
      console.log("set again", action.test);
      return action.tests;
    default:
      return state;
  }
};

export const currentTest = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_TEST:
      console.log("set", action.test);
      return action.test;
    default:
      return state;
  }
};
