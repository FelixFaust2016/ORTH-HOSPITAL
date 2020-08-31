import api from "../../services/api";
import { SET_CATEGORY } from "../actionTypes";
import { addError, removeError } from "./error";

export const setCategory = (categories) => ({
  type: SET_CATEGORY,
  categories,
});

export const getCategory = () => {
  return async (dispatch) => {
    try {
      const category = await api.call("get", "category");
      dispatch(setCategory(category));
      dispatch(removeError());
    } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
  };
};
