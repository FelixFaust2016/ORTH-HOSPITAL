import api from "../../services/api";
import { SET_QUOTES } from "../actionTypes";
import { addError, removeError } from "./error";

export const setQuotes = (quotes) => ({
  type: SET_QUOTES,
  quotes,
});

export const getQuotes = () => {
  return async (dispatch) => {
    try {
      const quotes = await api.call("get", "quotes");
      dispatch(setQuotes(quotes));
      dispatch(removeError());
    } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
  };
};
