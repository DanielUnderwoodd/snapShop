import {
  SEND_CODE,
  SUBMIT_SIGN_IN,
} from "../../actionTypes/customer/customerActionTypes";
import { ERROR } from "../../actionTypes/public/publicActionTypes";
import api from "../../config/api";
import { errorHandler } from "../error/errorHandler";

export const send_code = (email) => async (dispatch) => {
  try {
    const response = await api.post("/customer/pb/code", { email });
    return {
      error: false,
      isRegistered: response.data.isRegistered,
    };
  } catch (err) {
    errorHandler(err, dispatch, ERROR);

    return {
      error: true,
    };
  }
};
export const send_code_again = (email) => async (dispatch) => {
  try {
    const response = await api.post("/customer/pb/code", { email });
    dispatch({
      type: SEND_CODE,
      payload: response.data.isRegistered,
    });
  } catch (err) {
    errorHandler(err, dispatch, ERROR);
  }
};

export const submit_sign_in = (user) => async (dispatch) => {
  const { email, code } = user;
  try {
    const response = await api.post("/customer/pb/login", {
      email,
      code,
    });

    if (response.data) {
      dispatch({
        type: SUBMIT_SIGN_IN,
        payload: response.data,
      });
    } else {
      throw Error;
    }
  } catch (err) {
    errorHandler(err, dispatch, ERROR);
  }
};

export const submit_sign_up = (user) => async (dispatch) => {
  const { phoneNumber, code, email, firstName, lastName } = user;
  console.log(user);
  try {
    const response = await api.post("/customer/pb/register", {
      phoneNumber,
      code,
      firstName,
      lastName,
      email,
    });
    if (response.data) {
      dispatch({
        type: SUBMIT_SIGN_IN,
        payload: response.data,
      });
    } else {
      throw Error;
    }
  } catch (err) {
    errorHandler(err, dispatch, ERROR);
  }
};
