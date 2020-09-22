import { SET_CURRENT_USER, SET_USER } from "../actionTypes";

const DEFAULT_STATE = {
  isAuthenticated: false,
  user: {},
};

export const users = (state = [], action) => {
  switch (action.type) {
    case SET_USER:
      return action.categories;
    default:
      return state;
  }
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !!Object.keys(action.user).length,
        user: action.user,
      };

    default:
      return state;
  }
};
