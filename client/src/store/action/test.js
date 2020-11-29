import api from "../../services/api";
import { SET_TEST, SET_CURRENT_TEST } from "../actionTypes";
import { addError, removeError } from "./error";

export const setTest = (tests) => ({
  type: SET_TEST,
  tests,
});

export const setCurrentTest = (test) => ({
  type: SET_CURRENT_TEST,
  test,
});

export const getTests = () => {
  return async (dispatch) => {
    console.log("helllllllllllooooo");
    try {
      const tests = await api.call("get", "test");
      console.log(tests, "____________________");
      dispatch(setTest(tests));
      dispatch(removeError());
    } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
  };
};


export const getCurrentTest = (path) => {
    return async (dispatch) => {
      try {
        const test = await api.call("get", `test/${path}`);
        dispatch(setCurrentTest(test));
        dispatch(setTest(test));
        dispatch(removeError());
      } catch (err) {
        const error = err.response.data;
        dispatch(addError(error.message));
      }
    };
  };