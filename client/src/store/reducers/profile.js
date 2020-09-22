import { SET_PROFILE, SET_CURRENT_PROFILE } from "../actionTypes";

export const profiles = (state = [], action) => {
  switch (action.type) {
    case SET_PROFILE:
      return action.profiles;
    default:
      return state;
  }
};

export const currentProfile = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_PROFILE:
      return action.profile;
    default:
      return state;
  }
};
