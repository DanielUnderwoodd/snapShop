import {
  SEND_CODE,
  SUBMIT_SIGN_IN,
  LOG_OUT_CUSTOMER,
} from "../actionTypes/customer/customerActionTypes";

let initial = {
  isLogIn: false,
};

export default (state = initial, action) => {
  switch (action.type) {
    case SEND_CODE:
      return { ...state, isRegistered: action.payload };
    case SUBMIT_SIGN_IN:
      return { ...state, isLogIn: true };
    case LOG_OUT_CUSTOMER:
      return initial;
    default:
      return state;
  }
};
