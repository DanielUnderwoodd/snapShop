import {
  SUBMIT_SIGN_IN,
  SUBMIT_SIGN_UP,
  LOG_OUT_CUSTOMER,
  UPDATE_ADDRESS,
  UPDATE_CUSTOMER_PROFILE,
} from "../actionTypes/customer/customerActionTypes";

let initial = {
  _id: "",
  firstName: "",
  lastName: "",
  balance: 0,
  sessionId: "",
  role: "",
  email: "",
  phoneNumber: "",
  address: [],
};

export default (state = initial, action) => {
  switch (action.type) {
    case SUBMIT_SIGN_IN:
      return {
        ...state,
        _id: action.payload._id,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        balance: action.payload.balance,
        sessionId: action.payload.sessionId,
        role: action.payload.role,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber,
        address: action.payload.address,
      };
    case SUBMIT_SIGN_UP:
      return {
        ...state,
        _id: action.payload._id,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        balance: action.payload.balance,
        sessionId: action.payload.sessionId,
        role: action.payload.role,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber,
        address: action.payload.address,
      };
    case UPDATE_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case UPDATE_CUSTOMER_PROFILE:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        phoneNumber: action.payload.phoneNumber,
      };
    case LOG_OUT_CUSTOMER:
      return initial;
    default:
      return state;
  }
};
