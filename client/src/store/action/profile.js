import api from "../../services/api";
import { SET_PROFILE, SET_CURRENT_PROFILE } from "../actionTypes";
import { addError, removeError } from "./error";

export const setProfiles = (profiles) => ({
  type: SET_PROFILE,
  profiles,
});

export const setCurrentProfile = (profile) => ({
  type: SET_CURRENT_PROFILE,
  profile,
});

export const getProfile = () => {
  return async (dispatch) => {
    try {
      const profiles = await api.call("get", "profile");
      dispatch(setProfiles(profiles));
      dispatch(removeError());
    } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
  };
};

export const getAProfile = (path) => {
  return async (dispatch) => {
    try {
      const profile = await api.call("get", `profile/${path}`);
      dispatch(setCurrentProfile(profile));
      dispatch(removeError());
    } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
  };
};

export const getCurrentProfile = (path) => {
  return async (dispatch) => {
    try {
      const profile = await api.call("get", `profile/${path}`);
      dispatch(setCurrentProfile(profile));
      dispatch(setProfiles(profile));
      dispatch(removeError());
    } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
  };
};

export const getUserProfile = () => {
  return async (dispatch) => {
    try {
      const profiles = await api.call("get", "profile/user");
      dispatch(setProfiles(profiles));
      dispatch(removeError());
    } catch (err) {
      console.log(err);
      // const error = err.response.data;
      // dispatch(addError(error.message));
    }
  };
};

export const createProfile = (data) => {
  console.log("data", data);
  return async (dispatch) => {
    try {
      const profile = await api.call("post", "profile", data);
      dispatch(setCurrentProfile(profile));
      dispatch(removeError());
    } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
  };
};

export const updateProfile = (data) => {
  return async (dispatch) => {
    try {
      const profile = await api.call("post", "profile", data);
      dispatch(setCurrentProfile(profile));
      dispatch(removeError());
    } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
  };
};

export const updateAProfile = (path, data) => {
  return async (dispatch) => {
    try {
      const profile = await api.call("put", `profile/${path}`, data);
      // console.log(profile)
      await getProfile();
      dispatch(setCurrentProfile(profile));
      dispatch(removeError());
      getProfile();
    } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
  };
};
