import { ERROR, ERROR_CLEANER } from "../actionTypes/public/publicActionTypes";
import { LOG_OUT_CUSTOMER } from "../actionTypes/customer/customerActionTypes";

let initial = {
  newError: {
    message: "",
  },
};

export default (state = initial, action) => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        newError: { ...state.newError, message: action.payload },
      };
    case ERROR_CLEANER:
      return { ...state, newError: {} };
    case LOG_OUT_CUSTOMER:
      return initial;
    default:
      return state;
  }
};
