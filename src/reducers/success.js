import {
  SUCCESS,
  SUCCESS_CLEANER,
} from "../actionTypes/public/publicActionTypes";
import { LOG_OUT_CUSTOMER } from "../actionTypes/customer/customerActionTypes";

let initial = {
  newSucess: {
    message: "",
  },
};

export default (state = initial, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        newSucess: { ...state.newSucess, message: action.payload },
      };
    case SUCCESS_CLEANER:
      return { ...state, newSucess: {} };
    case LOG_OUT_CUSTOMER:
      return initial;
    default:
      return state;
  }
};
