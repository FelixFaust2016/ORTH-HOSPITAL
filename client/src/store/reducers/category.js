import { SET_CATEGORY, } from "../actionTypes";

export const categories = (state = [], action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return action.categories;
    default:
      return state;
  }
};

// export const currentAppointment = (state = {}, action) => {
//   switch (action.type) {
//     case SET_CURRENT_APPOINTMENT:
//       return action.appointment;
//     default:
//       return state;
//   }
// };
