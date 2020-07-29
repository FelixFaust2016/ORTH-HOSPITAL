import { SET_QUOTES } from "../actionTypes";

export const quotes = (state = [], action) => {
  switch (action.type) {
    case SET_QUOTES:
      return action.quotes;
    default:
      return state;
  }
};
